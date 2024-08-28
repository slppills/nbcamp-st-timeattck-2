import { useSearchParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock.js";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");
  const thisPokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(pokemonId));

  return (
    <>
      <img src={thisPokemon.img_url} alt="" />
      <h2>{thisPokemon.korean_name}</h2>
      <p>{thisPokemon.types.join(", ")}</p>
      <p>{thisPokemon.description}</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </>
  );
};

export default PokemonDetail;
