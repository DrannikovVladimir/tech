import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 35px;
  padding-right: 20px;
  cursor: pointer;
`;
  

const Icon = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 18 11',
  fill: 'none',
})``;

const Svg = styled(Icon)`
  width: 18px;
  height: 11px;
`;

const ArrowDown = () => {
  return (
    <Container>
      <Svg>
        <path d="M9 9L8.29289 9.70711L9 10.4142L9.70711 9.70711L9 9ZM0.292894 1.70711L8.29289 9.70711L9.70711 8.29289L1.70711 0.292894L0.292894 1.70711ZM9.70711 9.70711L17.7071 1.70711L16.2929 0.292895L8.29289 8.29289L9.70711 9.70711Z" fill="#2A303D"/>
      </Svg>
    </Container>    
  );
};

export default ArrowDown;