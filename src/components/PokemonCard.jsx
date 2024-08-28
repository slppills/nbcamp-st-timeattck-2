import styled from "styled-components";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DexContext } from "../context/DexContext";

const Wrapper = styled.div`
  padding: 10px;
  border: 1px solid white;
`;
const SelectButton = styled.button`
  background-color: red;
`;

const PokemonCard = ({ pokemon, isSelected }) => {
  const { myPokemon, setMyPokemon } = useContext(DexContext);
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
        <SelectButton
          ref={buttonRef}
          onClick={() => {
            if (myPokemon.length >= 6) {
              alert("6마리 꽉 찼습니다");
            } else if (myPokemon.includes(pokemon.id - 1)) {
              alert("이미 그 포켓몬이 있습니다");
            } else {
              setMyPokemon((prev) => [...prev, pokemon.id - 1]);
            }
          }}
        >
          추가
        </SelectButton>
      )}
    </Wrapper>
  );
};

export default PokemonCard;
