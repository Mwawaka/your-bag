import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <main className="text-greyOne">
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;