import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { DexContext } from "../context/DexContext";

const Wrapper = styled.div`
  padding: 20px;
  background-color: gray;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;

const PokemonList = () => {
  const { pokemonList } = useContext(DexContext);
  return (
    <Wrapper>
      {pokemonList.map((pokemon, i) => {
        return <PokemonCard key={i} pokemon={pokemon} />;
      })}
    </Wrapper>
  );
};

export default PokemonList;
