import React from 'react';
import styled from 'styled-components';

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