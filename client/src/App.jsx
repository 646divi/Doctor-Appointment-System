import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import DefaultSpinner from "./components/DefaultSpinner";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <DefaultSpinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}
import Spinner from "./components/DefaultSpinner";

export default App;
