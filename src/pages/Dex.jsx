import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../mock.js";
import PokemonList from "../components/PokemonList.jsx";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
`;

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);
  console.log(myPokemon);

  return (
    <>
      <Wrapper>
        <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon} pokemonList={MOCK_DATA} />
        <PokemonList pokemonList={MOCK_DATA} setMyPokemon={setMyPokemon} />
      </Wrapper>
    </>
  );
};

export default Dex;
