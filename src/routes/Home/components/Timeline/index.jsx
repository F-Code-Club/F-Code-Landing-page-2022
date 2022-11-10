import { useState, useEffect } from 'react';

import moment from 'moment';

import { getChallenge } from '../../../../utils/productAPI';
import Button from '../Button';
import Popup from './Popup';
import * as Styled from './Timeline.styled';

const CARD_LIST = [
    // {
    //     description: 'string',
    //     endTime: '2022-10-19T17:31:18.442Z',
    //     startTime: '2022-10-19T17:31:18.442Z',
    //     id: 0,
    //     status: 'ACTIVE',
    //     title: 'string',
    // },

    {
        description: 'Click on the Sign Up button to accept the challenges from F-Code!',
        endTime: '10.11',
        startTime: '06/11',
        id: 0,
        status: 'ACTIVE',
        title: 'Form registration',
        buttonTitle: 'Sign Up Now!',
    },
    {
        title: 'First Challenge',
        description: 'The challenge will be revealed later',
        startTime: '12/11',
        endTime: '17/11',
        id: 1,
        status: 'INACTIVE',
        buttonTitle: 'See Details',
    },
    {
        title: 'Second Challenge',
        description: 'The challenge will be revealed later',
        startTime: '19/11',
        endTime: '23/11',
        id: 2,
        status: 'INACTIVE',
        buttonTitle: 'See Details',
    },
    {
        title: 'Third Challenge',
        description: 'The challenge will be revealed later',
        startTime: '26/11',
        endTime: '24/12',
        id: 3,
        status: 'INACTIVE',
        buttonTitle: 'See Details',
    },
];

var localTime = moment().format('YYYY-MM-DD'); // store localTime
var proposedDate = localTime + 'T00:00:00.000Z';
// console.log(proposedDate);
// if
const Timeline = () => {
    const [open, setOpen] = useState(false);
    const [itemIdx, setItemIdx] = useState(-1);
    const [chall, setChallenges] = useState([]);
    const [active, setActive] = useState('');

    useEffect(() => {
        // Call API to get all the challenges
        getChallenge()
            .then((res) => {
                // console.log(res);
                let titleChallenge = [
                    'FORM REGISTRATION',
                    'FIRST CHALLENGE',
                    'SECOND CHANLLENGE',
                    'THIRD CHALLENGE',
                ];
                let dateChanllenge = res.data.status.data;
                dateChanllenge.forEach((el, id) => {
                    if (proposedDate >= el.start_time && proposedDate <= el.end_time) {
                        el.status = 'ACTIVE';
                        setActive('ACTIVE');
                    } else {
                        el.status = 'INACTIVE';
                        setActive('INACTIVE');
                    }

                    let newStartTime = el.start_time.split('T');
                    let StartDate = newStartTime[0].split('-');
                    let newStartDate = StartDate[2] + '/' + StartDate[1];
                    el.startTime = newStartDate;

                    let newEndTime = el.end_time.split('T');
                    let EndDate = newEndTime[0].split('-');
                    let newEndDate = EndDate[2] + '/' + EndDate[1];
                    el.endTime = newEndDate;
                    el.titleChallenge = titleChallenge[id];
                });
                setChallenges(dateChanllenge);
            })
            .catch((err) => {
                console.log('TimeLine: ', err);
            });
        // setChallenges(CARD_LIST);
    }, []);

    const handleClickOpen = (idx) => {
        setOpen(true);
        setItemIdx(idx);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // console.log(challenges);
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Header>
                    <Styled.Heading data-aos="fade-left" data-aos-anchor="bottom-bottom">
                        Timeline
                    </Styled.Heading>
                    <Styled.Subheading data-aos="fade-left">
                        To become an official member of F-Code, you need to go through 4 stages.
                    </Styled.Subheading>
                </Styled.Header>
                <div>
                    {chall.map((item, idx) => (
                        <Styled.Card
                            key={item._id}
                            status={item.status}
                            // data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                        >
                            <Styled.Left>
                                <Styled.CardHeading>
                                    {item.status === 'ACTIVE' ? item.title : item.titleChallenge}
                                </Styled.CardHeading>
                                <Styled.CardSubheading>
                                    {`Time: ${item.startTime} - ${item.endTime}`}
                                </Styled.CardSubheading>
                                <p
                                    style={{
                                        display: 'inline-block',
                                        maxWidth: '100%',
                                        // height: '50px',
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {item.status === 'ACTIVE'
                                        ? item.description
                                        : 'The challenge will be revealed later'}
                                </p>
                            </Styled.Left>
                            {item.status === 'ACTIVE' && (
                                <Styled.Right>
                                    <Button
                                        style={{ width: 'fit-content' }}
                                        onClick={() => handleClickOpen(idx)}
                                    >
                                        See more details
                                    </Button>
                                    <Popup
                                        open={open}
                                        handleClose={handleClose}
                                        data={chall[itemIdx]}
                                    />
                                </Styled.Right>
                            )}
                        </Styled.Card>
                    ))}
                </div>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

Timeline.propTypes = {};

export default Timeline;
