import { useState } from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  let router = useRoutes(routes);

  return (
    <div>
      <div className="flex justify-between mr-52">
        <Sidebar />
        {router}
      </div>
    </div>
  );
}

export default App;
