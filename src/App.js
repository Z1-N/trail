import React, { useState } from "react";
function App() {
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };
  const alering = () => {
    alert("Thank You <3 💕")
  } 
  

  return (
    <div className="App">
      <div className="flex justify-center items-center font-mono font-bold text-3xl text-center min-h-screen">
        <h1 className="text-3xl border-solid border-2 border-sky-500 rounded-2xl p-3"> Alya do you Forgive me ?🥺</h1>
        <button className="mx-10" onClick={alering}>YES</button>
        {showButton && <button  className="mx-10" onClick={toggleButton}>No</button>}
        </div>  
    </div>
  );
}

export default App;
