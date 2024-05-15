import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [])

  return (
    <div className="container">
      <ToastContainer />
      <Layout />
      <Main />
    </div>
  );
}

export default App;
