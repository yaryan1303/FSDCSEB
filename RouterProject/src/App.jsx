import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Login from "./Login";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import DataFetch from "./DataFetch";
import FetchAPI from "./FetchApI";

function App() {
  const [rdata, setrdata] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login regdata={rdata} />} />
        <Route
          path="/registration"
          element={<Registration regData={setrdata} />}
        />

        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/recipes" element={<FetchAPI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
