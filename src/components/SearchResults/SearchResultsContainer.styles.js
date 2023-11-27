import styled from "styled-components";

export const SearchResultsContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 25vw;
  padding: 2rem 5rem;
  background-color: white;
  color: black;
  max-width: 25%;
  max-height: 55%;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${(props) => (props.isVisible ? "0" : "-100%")});
`;
