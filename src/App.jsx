import "./App.css";
import Router from "./shared/Router";
import { DexContext } from "./context/DexContext";
import { useState } from "react";
import MOCK_DATA from "./mock";

function App() {
  const [myPokemon, setMyPokemon] = useState([]);
  const value = {
    myPokemon,
    setMyPokemon,
    pokemonList: MOCK_DATA,
  };
  return (
    <>
      <DexContext.Provider value={value}>
        <Router />
      </DexContext.Provider>
    </>
  );
}

export default App;
