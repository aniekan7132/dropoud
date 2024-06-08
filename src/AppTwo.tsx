import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Button from "./components/ButtonComponent";
// import Input from "./components/Input";
import Home from "./pages/Home";
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
