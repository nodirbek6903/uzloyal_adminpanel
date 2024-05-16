import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider } from "react-query";
import queryClient from "./service/queryClient";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Layout />
        <Main />
      </QueryClientProvider>
    </div>
  );
}

export default App;
