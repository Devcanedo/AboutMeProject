import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import { FaGithub, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";

const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding-top: 4em;

 gap: 10px 20px;
`;

const Title = styled.h1`
 font-size: 20px;
`;

const Home = () => {
 return(
     <Container>
       <Title> Minhas Redes </Title>
       <Button text="Sobre Mim" link="/about" />
     </Container>
 );
}

export default Home;