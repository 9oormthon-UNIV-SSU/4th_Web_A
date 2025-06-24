import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 8px 16px;
    margin: 8px 0;
    cursor: pointer;
    background-color:rgb(244, 241, 241);
    color: black;
    border: none;
    border-radius: 6px;
    font-size: 14px;

    &:hover {
        background-color:rgb(232, 236, 242);
    }
`;

function Button({ onClick, label }) {
    return (
    <StyledButton onClick={onClick}>
        {label}
    </StyledButton>
    );
}

export default Button;
