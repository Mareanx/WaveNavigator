import React, { FormEvent, useContext, useState } from "react"; //FormEvent -> é um tipo do ts para eventos de formularios ** useContext -> hook para acessar contextos //
import { FiSearch } from "react-icons/fi";
import SearchContext from "../../contexts/search-context";

import { Container } from "./style";

const SearchB: React.FC = () => {
  const [inputUrl, setInputUrl] = useState<string>("");

  const searchContxt = useContext(SearchContext);

  function handleSubmitSearch(event: FormEvent) {
    //chama função para submeter o formulario
    event.preventDefault(); //evita o comportamento padrao do formulario de recarregar a pagina
    let localUrl = inputUrl; //declara a variavel que vai permitir a entrada de dados do usuario

    if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
      //verificação, se a url não começa com https, adiciona o http ao inicio
      localUrl = "http://" + inputUrl;
      setInputUrl(localUrl);
    }
    searchContxt.setUrl(localUrl);
  }

  //renderização do componente
  return (
    <>
      <Container>
        <form>
          <input
            onChange={(e) => setInputUrl(e.target.value)}
            value={inputUrl}
            type="text"
            style={{ borderRadius: "5px" }}
          />
          <button
            type="submit"
            onClick={handleSubmitSearch}
            style={{ backgroundColor: "#bd93f9" }}
          >
            <FiSearch />
          </button>
        </form>
      </Container>
    </>
  );
};
export default SearchB;
