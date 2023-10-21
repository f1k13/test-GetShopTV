import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import AppRouter from "./app-router";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
