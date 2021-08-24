import styled from "styled-components";
// Styled component named StyledButton
export const STApp = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(5px + 2vmin);
  &:link {
    color: #61dafb;
  }
`;
export const STHeader = styled.header`
  top: 0;
  min-height: 100px;
  background-color: #ff8000;
  color: white;
`;
export const STFooter = styled.footer`
  background-color: #e0d8d1;
  padding-right: 2%;
  text-align: right;
  color: black;
  font-size: calc(3px + 2vmin);
`;
export const STBody = styled.body`
  flex: 1;
  background-color: #fff8f2;

  /*ESTILOS PARA LOS FORMULARIOS*/

  .titulo,
  .subtitulo {
    margin: 0px;
  }

  textarea {
    vertical-align: middle;
    min-width: 300px;
    max-width: 600px;
    min-height: 300px;
    max-height: 300px;
  }

  .formIPC {
    margin-top: 0%;
  }

  .cabecera #ano {
    width: 100%;
    height: 3vmax;
  }

  .modificarDatosBBDD,
  .modificarDatosBBDD * {
    font-size: 12px;
  }

  .modificarDatosBBDD * {
    margin: 0px 5px;
  }

  .radio #update {
    margin-left: 20px;
  }

  .btn {
    margin-left: 50px;
    margin-right: 50px;
  }

  #cuerpo {
    margin-top: 20px;
    width: 100%;
    display: inline-block;
  }

  #cuerpo #meses_e_ipcs {
    display: inline-block;
    padding: 20px 20px;
    vertical-align: middle;
  }

  #mes_e_ipc {
    width: 100%;
    text-align: right;
  }

  #mes {
    text-align: right;
    display: inline;
  }

  #ipc {
    width: 50%;
    text-align: left;
    display: inline;
  }

  #sqlBox {
    display: inline-block;
    padding: 0 20px;
  }
`;
export const STNavBar = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: #e0d8d1;
`;
export const STBotonNavBar = styled.button`
  transition: 0.3s;
  float: left;
  color: black;
  background-color: inherit;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 0px;
  outline: none;
  font-family: inherit;
  margin: 0;
  &:hover {
    transition: 0.3s;
    color: #ff8000;
    border-bottom: 2px solid #ffc284;
  }
  &:focus {
    transition: 0.3s;
    color: #ff8000;
    border-bottom: 2px solid #ff8000;
  }
`;
