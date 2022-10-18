import React from 'react';

import { StyledBurger } from './burger.style';

const Burger = (props) => {
    return (
        <StyledBurger
            open={props.open}
            onClick={() => {
                props.setOpen(!props.open);
            }}
        >
            <span></span>
            <span></span>
            <span></span>
        </StyledBurger>
    );
};

export default Burger;
