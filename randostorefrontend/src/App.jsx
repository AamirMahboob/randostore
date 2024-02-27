import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import ToasterProvider from "./components/ToasterProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToasterProvider />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
