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

const Box = styled.div`
  background: linear-gradient(145deg, #e2e8ec, #fdfdfd);
  padding: 2em;
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #fdfdfd;
  border-radius: 10px;
`;

const Title = styled.h1`
 font-size: 20px;
`;

const BoxRedes = styled.div`
 display: flex;
 flex-direction: row;
`;

const RedesSociais = styled.div`
 padding: 18px 25px;
 justify-content: center;
 border-radius: 6px;
 gap: 10px 30px;
 transition: 0.3s all ease;
 cursor: pointer;
 color: #000;
 transition: 0.5s;

 background-color: linear-gradient(145deg, #e2e8ec, #fdfdfd);
 box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #fdfdfd;

 &:hover {
   background-color: white;
   color: #019587;
   transform: translateY(-10px);
 }
`;

const MediasSociais = styled.div`
 padding: 18px 25px;
 justify-content: center;
 border-radius: 6px;
 gap: 10px 30px;
 transition: 0.3s all ease;
 cursor: pointer;
 color: #000;
 transition: 0.5s;

 background-color: linear-gradient(145deg, #e2e8ec, #fdfdfd);
 box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #fdfdfd;

 &:hover {
   background-color: white;
   color: #019587;
   transform: translateY(-10px);
 }
`;

const Home = () => {
 return(
     <Container>
       <Box>
       <Title> Minhas Redes </Title>


       <BoxRedes>
       <RedesSociais>
         <FaGithub />
       </RedesSociais>
       <RedesSociais>
         <FaInstagram />
       </RedesSociais>
       </BoxRedes>
       <BoxRedes>
       <MediasSociais>
        <FaTwitch />
       </MediasSociais>
       <MediasSociais>
        <FaLinkedin/>
       </MediasSociais>
       </BoxRedes>

       <Button text="Sobre Mim" link="/about" />
       </Box>
     </Container>
 );
}

export default Home;