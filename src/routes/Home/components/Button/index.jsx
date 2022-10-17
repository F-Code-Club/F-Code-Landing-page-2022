import * as Styled from './Button.styled';

const Button = ({ children, ...rest }) => {
    return <Styled.Button {...rest}>{children}</Styled.Button>;
};

Button.propTypes = {};

export default Button;
