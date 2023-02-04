import { useEffect, useState } from "react";
import { Navbar, Center, Hero } from "./components";
function App() {
  return (
    <div className="App relative">
		<Navbar />
		<Hero />
		<Center />
    </div>
  );
}

export default App;
