import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </>
    </>
  );
}

export default App;
