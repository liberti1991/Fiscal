import { useState } from "react";
import { Navbar } from "./componetes/layout/Navbar";
import { HomePage } from "./componetes/screens/HomePage";

function App() {
  const [ isOpen, setIsOpen ] = useState(false);
  const toggleSideBar = () => setIsOpen((atualValor) => !atualValor);
  
  return (
    <>
      <Navbar toggleSideBar={toggleSideBar}/>
      <HomePage toggleSideBar={toggleSideBar} isOpen={isOpen}/>
    </>
  );
}

export default App;
 