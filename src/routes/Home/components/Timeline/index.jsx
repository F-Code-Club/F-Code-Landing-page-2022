import { useState, useEffect } from 'react';

import moment from 'moment';

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
        endTime: '20/10',
        startTime: '06/11 - 10/11',
        id: 0,
        status: 'ACTIVE',
        title: 'Form registration',
        buttonTitle: 'Sign Up Now!',
    },
    {
        title: 'First Challenge',
        description: 'Click on the Details button to view this challenges from F-Code!',
        startTime: '12/11 - 17/11',
        endTime: 'Reveal later',
        id: 1,
        status: 'INACTIVE',
        buttonTitle: 'See Details',
    },
    {
        title: 'Second Challenge',
        description: 'The challenge will be revealed later',
        startTime: '19/11 - 23/11',
        endTime: 'Reveal later',
        id: 2,
        status: 'INACTIVE',
        buttonTitle: 'See Details',
    },
    {
        title: 'Third Challenge',
        description: 'The challenge will be revealed later',
        startTime: '26/11 - 24/12',
        endTime: 'Reveal later',
        id: 3,
        status: 'INACTIVE',
        buttonTitle: 'See Details',
    },
];

const Timeline = () => {
    const [open, setOpen] = useState(false);
    const [itemIdx, setItemIdx] = useState(-1);
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        // Call API to get all the challenges
        setChallenges(CARD_LIST);
    }, []);

    const handleClickOpen = (idx) => {
        setOpen(true);
        setItemIdx(idx);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    {CARD_LIST.map((item, idx) => (
                        <Styled.Card
                            key={item.id}
                            status={item.status}
                            // data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                        >
                            <Styled.Left>
                                <Styled.CardHeading>{item.title}</Styled.CardHeading>
                                <Styled.CardSubheading>
                                    {/* {`Time: ${moment(item.startTime).format('DD/MM')} - 
                                    ${moment(item.endTime).format('DD/MM')}`} */}
                                    {`Time: ${item.startTime}`}
                                </Styled.CardSubheading>
                                <p>{item.description}</p>
                            </Styled.Left>
                            {item.status === 'ACTIVE' && (
                                <Styled.Right>
                                    <Button onClick={() => handleClickOpen(idx)}>
                                        {item.buttonTitle}
                                    </Button>
                                    <Popup
                                        open={open}
                                        handleClose={handleClose}
                                        data={challenges[itemIdx]}
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
