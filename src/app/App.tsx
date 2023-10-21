import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import AppRouter from "./app-router";

const App = () => {
  return (
    <div className="w-[1280px] h-screen">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
