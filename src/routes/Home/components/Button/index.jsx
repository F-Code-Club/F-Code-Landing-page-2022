import * as Styled from './Button.styled';

const Button = ({ children }) => {
    return <Styled.Button>{children}</Styled.Button>;
};

Button.propTypes = {};

export default Button;
