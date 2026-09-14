import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: white;
    color: blue;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>Teste Footer</p>
        </FooterContainer>
    );
};

export default Footer;