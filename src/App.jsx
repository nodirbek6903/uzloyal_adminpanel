import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Layout />
      <Main />
    </div>
  );
}

export default App;
