import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const MyPokemonContainer = styled.div`
  padding: 20px;
  background-color: gray;
  margin-bottom: 20px;
`;
const MyPokemonTitle = styled.h2`
  color: red;
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;
const MyPokemon = styled.div`
  display: flex;
  gap: 30px;
`;
const MyPokemonBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

const Dashboard = ({ myPokemon, setMyPokemon, pokemonList }) => {
  return (
    <MyPokemonContainer>
      <MyPokemonTitle>나만의 포켓몬</MyPokemonTitle>
      <MyPokemon>
        {Array(6)
          .fill(null)
          .map((_, index) => {
            return myPokemon[index] ? (
              <PokemonCard
                isSelected={true}
                key={index + 999}
                pokemon={pokemonList[myPokemon[index]]}
                setMyPokemon={setMyPokemon}
              />
            ) : (
              <MyPokemonBox key={index} />
            );
          })}
      </MyPokemon>
    </MyPokemonContainer>
  );
};

export default Dashboard;
