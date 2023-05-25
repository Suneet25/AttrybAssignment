import logo from "./logo.svg";
import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
