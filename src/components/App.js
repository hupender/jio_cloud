import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyList from "./my_list/my_list";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my_list" element={<MyList />} />
      </Routes>
    </Router>
  );
}

export default App;
