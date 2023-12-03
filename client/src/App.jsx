import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import DefaultSpinner from "./components/DefaultSpinner";

  function App() {
    const { loading } = useSelector(state => state.alerts)
    return (
      <>
        <BrowserRouter>
          {loading ? (<DefaultSpinner/>) :
            (<Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            </Routes>)}

        </BrowserRouter>
      </>
    )
  }
import Spinner from "./components/DefaultSpinner";

export default App
