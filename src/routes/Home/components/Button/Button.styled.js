import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    width: 131px;
    height: 35px;

    /* Green/400 */

    background: #45ce7c;
    border-radius: 8px;
    border: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        filter: brightness(95%);
        /* box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px, rgb(0 0 0 / 15%) 0px 2px 4px,
            rgb(0 0 0 / 15%) 0px 4px 8px; */
    }

    &:disabled {
        filter: grayscale(1);
        pointer-events: none;
    }
`;
