import styled from "styled-components";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  padding: 10px;
  border: 1px solid white;
`;
const SelectButton = styled.button`
  background-color: red;
`;

const PokemonCard = ({ pokemon, setMyPokemon, isSelected }) => {
  const navigate = useNavigate();
  const buttonRef = useRef();

  return (
    <Wrapper onClick={(e) => e.target !== buttonRef.current && navigate(`/pokemon-detail?id=${pokemon.id}`)}>
      <img src={pokemon.img_url} alt="" />
      <h3>{pokemon.korean_name}</h3>
      <p>No. {pokemon.id}</p>
      {isSelected ? (
        <SelectButton ref={buttonRef} onClick={() => setMyPokemon((prev) => prev.filter((p) => p !== pokemon.id - 1))}>
          삭제
        </SelectButton>
      ) : (
        <SelectButton ref={buttonRef} onClick={() => setMyPokemon((prev) => [...prev, pokemon.id - 1])}>
          추가
        </SelectButton>
      )}
    </Wrapper>
  );
};

export default PokemonCard;
