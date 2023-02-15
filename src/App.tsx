import { GlobalStyles } from "themes/styles";
import { Rotas } from "./routes";
import { Theme } from "./themes";

export const  App = () => {
  return (
    <Theme >
      <GlobalStyles />
      <Rotas />
    </Theme>
  );
}

export default App;
