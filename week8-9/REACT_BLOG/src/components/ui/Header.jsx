import styled from 'styled-components';


const StyledHeader = styled.header`
    padding: 16px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 16px;
    text-align: center;
`;

const Title = styled.h1`
    margin: 0;
`;

function Header() {
    return (
    <StyledHeader>
        <Title>Heewoo's Blog</Title>
    </StyledHeader>
    );
}

export default Header;
