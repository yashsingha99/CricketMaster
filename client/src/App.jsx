import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="h-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
