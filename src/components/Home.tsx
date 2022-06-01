import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from '../images/haru.jpg';

import { FaGithub, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";


const Container = styled.div`
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.8);
 position: fixed;
 display: flex;
 justify-content: center;
 align-items: center;
`;

const Wrapper = styled.div`
 width: 800px;
 height: 500px;
 box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
 background: #fff;
 color: #000;
 display: grid;
 grid-template-columns: 1fr 1fr;
 position: relative;
 z-index: 10;
 border-radius: 10px;
`;

const ModalImg = styled.img`
 width: 100%;
 height: 94%;
 border-radius: 10px 0 0 10px;
 background: #000;
`;

const ModalContent = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 line-height: 1.8;
 color: #141414;
`;

const Pzao = styled.p`
 margin-bottom: 1rem;
`;

const Title = styled.h1`
 font-size: 20px;
 text-decoration: underline;
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

 a{
     text-decoration: none;
 }

 &:hover {
   background-color: white;
   color: #019587;
   transform: translateY(-10px);
 }
`;

const Home = () => {
 return(
     <Container>
       <Wrapper>
       <ModalImg src={Logo} alt='photo' />
       <ModalContent>
       <Title> Minhas Redes </Title>
       <Pzao>Abaixo minhas redes sociais para contato</Pzao>

       <BoxRedes>
       
       <RedesSociais>
         <a href='https://github.com/rafabcanedo' target='_blank'
        rel='nooperner'
        >
         <FaGithub />
         </a>
       </RedesSociais>

       <RedesSociais>
         <a href='https://www.instagram.com/canedodev/' target='_blank'
         rel='nooperner'
         >
         <FaInstagram />
         </a>
       </RedesSociais>

       </BoxRedes>

       <BoxRedes>
       <MediasSociais>
         <a href='https://www.twitch.tv/canedopriv' target='_blank'
        rel='nooperner'
        >
        <FaTwitch />
        </a>
       </MediasSociais>
       <MediasSociais>
         <a href='https://www.linkedin.com/in/rafael-canedo-4abaa8197/' target='_blank'
        rel='nooperner'
        >
        <FaLinkedin/>
        </a>
       </MediasSociais>
       </BoxRedes>

       <Button text="Sobre Mim" link="/about" />
       </ModalContent>
       </Wrapper>
     </Container>
 );
}

export default Home;