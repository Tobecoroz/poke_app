import React from "react";

const Screen = ({ pokemones }) => {
  console.log(pokemones);

  return (
    <div
      style={{
        paddingTop: "5%",
        paddingBottom: "10%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

      <div className="screen">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {pokemones?.map((pokemon) => (
            <div key={pokemon.name} style={{ textAlign: "center", width: "33.33%",padding:"10px",boxSizing:"border-box", }}>
            <img src={pokemon.sprites.front_default} alt="pokemones" />
            <p style={{fontFamily: "Pokemon Classic", fontSize:"11px"}}>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/*Titulo del Game boy*/}
      <div style={{ marginTop: "10px"}}>
        <p style={{fontSize:"11px",color:"black",fontFamily: "sans-serif"}}><b>Game Boy Advance</b></p>
      </div>
          </div>
    </div>
  );
};

export default Screen;