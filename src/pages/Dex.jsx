import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList.jsx";

const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
`;

const Dex = () => {
  // const [myPokemon, setMyPokemon] = useState([]);
  // console.log(myPokemon);

  return (
    <>
      <Wrapper>
        <Dashboard />
        <PokemonList />
      </Wrapper>
    </>
  );
};

export default Dex;
