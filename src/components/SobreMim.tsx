import React from 'react';
import styled from 'styled-components';

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


const Title = styled.h1`
 font-size: 20px;
`;

const Text = styled.h3`
 font-size: 15px;
`;

const SobreMim = () => {
 return(
     <div>
         <Title> Sobre Mim </Title>
         <Text>Sei la as vezes penso que sou na verdade sou tipo nois <br /> 
               Como se nois fosse nois e pronto test vem de testar como<br /> 
               noi testa sempre noi é sempre testado acho que já ta bom<br />
               A historia é mais profunda do q se parece como criamos o todo<br />
               O todo é criado por noi chama no xesquedeeele.
         </Text>
     </div>
 );
};

export default SobreMim;