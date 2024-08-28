import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Wrapper = styled.div`
  padding: 20px;
  background-color: gray;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;

const PokemonList = ({ pokemonList, setMyPokemon }) => {
  return (
    <Wrapper>
      {pokemonList.map((pokemon, i) => {
        return <PokemonCard key={i} pokemon={pokemon} setMyPokemon={setMyPokemon} />;
      })}
    </Wrapper>
  );
};

export default PokemonList;
