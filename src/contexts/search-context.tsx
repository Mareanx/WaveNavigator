import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react"; /* react=lib principal - createContext= função usada para criar um contexto - dispatch e SetStateAction = tipos do ts para definir a função de atualização do estado  - useState=hook usado para adicionar estado aos componentes*/

interface EUrlContext {
  url: string; //representa a url como atual como uma string
  setUrl: Dispatch<SetStateAction<string>>; // garante que a função vai ser capaz de receber um novo valor de url, permitindo alterar o valor da url
}

const UrlContxt = createContext<EUrlContext>({} as EUrlContext); // cria um novo contexto com um valor inicial vazio ({})

export const UrlProvider: React.FC = ({ children }) => {
  //   funciona como um provedor para urlContxt       React.FC -> serve para definir componentes funcionais
  const [url, setUrl] = useState<string>(""); //   o hook é utilizado para criar um valor inicial, já a função setUrl é utilizada para alterar esse estado

  return (
    <UrlContxt.Provider value={{ url, setUrl }}>{children} </UrlContxt.Provider>
  );
};

export default { UrlContxt, UrlProvider };
