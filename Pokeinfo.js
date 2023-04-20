import React from "react";
const Pokeinfo=({data})=>{
  console.log(data)
return(
    <>
    <h1>{data.name}</h1>
    <div className="abilities">
        {data.abilities.map(poke=>{
            return(
                <>
                (!data)?"":(
                    <div className="group">
                    <h2>{poke.ability.name}</h2>)
                </div>
                </>
            )
        }
            )}
            <div className="base-stat">
                <h3>hp:30</h3>
                <h3>attack:52</h3>
                <h3>defence:42</h3>
                <h3>special-attack:50</h3>
                <h3>Speed</h3>
            </div>
  
           </div>
    </>
  )
}
export default Pokeinfo;