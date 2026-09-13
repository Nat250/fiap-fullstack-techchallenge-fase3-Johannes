import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    background-color: blue;
    color: black;
    justify-content: center;
    padding: 20px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 15px;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/recentes">Posts Recentes</Link>
                <Link to="/excluidos">Posts Excluídos</Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;