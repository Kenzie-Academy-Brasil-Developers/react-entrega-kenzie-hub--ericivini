import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;
  --gray-0: #F8F9FA;
  --gray-1: #868E96;
  --gray-2: #343B41;
  --gray-3: #212529;
  --gray-4: #121214;
  --sucess: #3FE864;
  --fail: #E83F5B;
  --title-1: 700 1.125rem "Inter";
  --title-2: 600 1rem "Inter";
  --title-3: 700 .875rem "Inter";
  --headline: 400 .7588rem "Inter";
  --headlineBold: 600 .7588rem "Inter";
  --headlineItalic: italic 400 .7588rem "Inter";
  --toastify-color-success: #3FE864;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #E83F5B;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  font-family: "Inter", sans-serif;
  background-color: #121214;
}

li {
  list-style: none;
}

button {
  background: transparent;
  color: inherit;
  cursor: pointer;
  border: 0;
}
a {
  text-decoration: none;
}
a {
  color: inherit;
}
.loading {
  position: relative;
  top: 18.75rem;
  color: #fff;
  text-align: center;
  font: var(--title-1);
}
`;
