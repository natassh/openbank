import React, { useContext } from 'react';
import styled from 'styled-components';
import './TitleStyled.css';

const Title = styled.h1`
  font-family: var(--main-font);
  font-size: 1.4rem;
  font-weight: var(--semi-bold);
  letter-spacing: 1px;
  margin-bottom: 2rem;
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 2.8rem;
    height: 0.1875rem;
    background-color: #40C3DF;
    color: #40C3DF;
    position: absolute;
    bottom: -0.3125rem;
    left: 0;
  }
`;


const TitleStyled: React.FC<TitleStyledProps> = ({children}) => {
  return (
    <Title>{children}</Title>
  )
}

export {TitleStyled};

type TitleStyledProps = {
  children: React.ReactNode
}
