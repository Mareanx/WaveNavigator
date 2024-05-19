import styled from "styled-components";

export const Container = styled.div`

   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: Helvetica, Arial, sans-serif;


   h1{
    margin-top:
    font-size:
    font-weight: bold;
   }

   form{
   display: flex;
   height: 50px;
   margin-top: 10px;
 }

  input{
    width: 50vw;
    margin-right: 10px;
    border: 0;
    padding: 0 20px
    border-radius 1px;
    background: #bd93f9;
  }

  textarea:focus{
    input:focus{
        outline: none;
        border: 1px solid #6272a4 !important;

    }

    button{
        width: 60px;
        border: 0;
        cursor: pointer;
        color: #bd93f9;
        border-radius: 5px;
    }

    button:focus{
        outline: none !important;
    }
`;
