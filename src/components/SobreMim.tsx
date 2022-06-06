import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from '../images/haru.jpg';

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
 height: 95%;
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


const Title = styled.h1`
 font-size: 20px;
 text-decoration: underline;
`;

const BoxText = styled.div`
 display: flex;
 justify-content: center;
`;

const Text = styled.h3`
 font-size: 15px;
`;

const SobreMim = () => {
 return(
     <Container>
      <Wrapper>
        <ModalImg src={Logo} alt='photo' />
         <ModalContent>
 
        <Title> Sobre Mim </Title>
         
         <Text>Hey, my name is Chris. I'm 20 years old and I'm developer <br />
               When I children lived in California where i started study code <br />
               and I loved It. My parents paid new courses for me. <br />
               Today, i'm games developer at Empresa tal in Vancouver,Canadá.<br />
               I develop with Unity and I publish my games o Steam. <br />
         </Text>

         <Button text="My Steam" link="/" />
         </ModalContent>
      </Wrapper>
     </Container>
 );
};

export default SobreMim;