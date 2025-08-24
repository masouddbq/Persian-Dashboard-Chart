import { useState, useEffect } from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  let router = useRoutes(routes);

  useEffect(() => {
    // Ensure RTL is applied to the document
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'fa-IR';
    
    // Set document title
    document.title = 'پنل مدیریت';
    
    // Ensure proper font loading
    if (document.fonts) {
      document.fonts.ready.then(() => {
        console.log('Fonts loaded successfully');
      });
    }
  }, []);

  return (
    <div className="font-pinar" dir="rtl">
      <div className="flex justify-between mr-52">
        <Sidebar />
        {router}
      </div>
    </div>
  );
}

export default App;
