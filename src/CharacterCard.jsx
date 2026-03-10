import { CharacterImage } from "./CharacterImage";

function CharacterCard({ name, onClick }) {
  return (
    <div className="character-card" onClick={onClick}>
      <h2>{name}</h2>
      <CharacterImage name={name} />
    </div>
  );
}

export { CharacterCard };
