// Header.styles.js
import styled from "styled-components";

export const Container = styled.header`
  background-color: #000;
  color: #fff;
`;

export const Content = styled.div`
  width: 79%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 1.8rem;
`;

export const LogoContainer = styled.div`
  img {
    order: 2;
    height: 3rem;
  }
`;

export const AuthButtonsContainer = styled.div`
  button {
    background-color: transparent;
    border: 1px solid #f5c518;
    color: #f5c518;
    padding: 0.625rem 0.9375rem;
    margin-left: 0.625rem;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #f5c518;
      color: #000;
    }
  }
`;
