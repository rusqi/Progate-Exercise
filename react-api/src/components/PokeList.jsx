const PokeList = ({ pokemonList, setSelectedPokemonName }) => {
    return (
      <div style={style.gridContent}>
        {pokemonList.map((item) => (
          <div
            key={item.name}
            style={style.card}
            onClick={() => setSelectedPokemonName(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
    )
  }
  
  const style = {
    gridContent: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 16,
      color: 'black',
    },
    card: {
      padding: "16px 8px",
      backgroundColor: "aquamarine",
      borderRadius: "8px",
      cursor: "pointer",
    },
  }
  
  export default PokeList