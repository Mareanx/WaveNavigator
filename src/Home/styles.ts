import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 350px;
  width: 100%;
  margin: 0;
`;

export const ViewsContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  top: 100px !important;
`;
