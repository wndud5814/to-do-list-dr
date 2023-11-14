import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
