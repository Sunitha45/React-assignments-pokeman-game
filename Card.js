import React from 'react';
const card=({pokemon, loading, infopokemon})=>{
    console.log(pokemon);
        return(
        <>
        <div className="card" key={Item.id} onClick={()=>infopokemon(item)}>
            <h2>{item.id}</h2>
            <img src={item.sprites.front.default} alt=""/>
            <h2>{item.name}</h2>
        </div>
        </>
    )
}
export default Card;