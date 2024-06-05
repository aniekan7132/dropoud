import { FC } from "react";
import Button from "./components/ButtonComponent";
import Input from "./components/Input";
import Home from "./pages/Home";
import "./App.css";
import EmailVerification from "./components/EmailVerification";

const App: FC = () => {
  return (
    <div>
      {/* <Home /> */}
      <EmailVerification />
    </div>
  );
};

export default App;
