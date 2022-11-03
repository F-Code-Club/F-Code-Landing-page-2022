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
        title: 'Form registration',
        description: 'Click on the Register button to accept the challenges from F-Code!',
        startTime: '03/11 - 09/11',
        endTime: '20/10',
        id: 0,
        status: 'ACTIVE',
        buttonTitle: 'Register Now!',
    },
    {
        title: 'First Challenge',
        description: 'Click on the Details button to view this challenges from F-Code!',
        startTime: 'Reveal later',
        endTime: 'Reveal later',
        id: 1,
        status: 'disabled',
        buttonTitle: 'See Details',
    },
    {
        title: 'Second Challenge',
        description: 'The challenge will be revealed later',
        startTime: 'Reveal later',
        endTime: 'Reveal later',
        id: 2,
        status: 'disabled',
        buttonTitle: 'See Details',
    },
    {
        title: 'Third Challenge',
        description: 'The challenge will be revealed later',
        startTime: 'Reveal later',
        endTime: 'Reveal later',
        id: 3,
        status: 'disabled',
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
