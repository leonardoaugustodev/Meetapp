import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

/* Reset margin and padding */
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

/* Remove outline when focus */
*:focus{
  outline: 0;
}

/* Set full-height */
html, body, #root{
  height: 100%;
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
}

/* Set font softness  */
body{
  -webkit-font-smoothing: antialiased;
}

input {
  height: 50px;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 10px;
  margin: 5px auto;

  font-size: 18px;

  color: #fff;

  background: rgba(0, 0, 0, 0.2);
}

button {

  cursor: pointer;
  height: 50px;
  margin: 10px 0;
  padding: 0 20px;

  background: #f94d6a;
  border: 0;
  border-radius: 4px;

  font-size: 18px;
  font-weight: bold;
  color: #fff;

  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
}

/* Set font into body, input and button */
body, input, textarea, button{
  font: 14px 'Roboto', sans-serif;
}

/* Reset decoration into anchor tags */
a{
  text-decoration: none;
}

`;
