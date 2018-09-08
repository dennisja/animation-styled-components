import styled from "styled-components";

const Fab = styled.button`
  position: fixed;
  z-index: 2;
  border: none;
  bottom: 2%;
  right: 2%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: green;
  color: white;
`;

export default Fab;
