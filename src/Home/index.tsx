import React from "react";
import { Container, Header } from "./styles";
import SearchB from "../components/Barra de Pesquisa";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <SearchB />
      </Header>
    </Container>
  );
};

export default Home;
