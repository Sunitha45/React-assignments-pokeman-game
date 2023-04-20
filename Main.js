import Pokeinfo from "./Pokeinfo";
import Card from "./Card";
import axios from "axios";
import{useState} from "react";
import{useEffect} from "react";
const Main=()=>{
    const[pokedata, setpokedata]=useState([]);
    const[loading, setloading]=useState(true);
    const[url, seturl]=useState("https://pokeapi.co/api/")
    const[nexturl, setnexturl]=useState();
    const[previousurl, setpreviousurl]=useState();
    const pokefun=async()=>{
        setloading(true)
        const res=await axios.get(URL);
        console.log(res.data.results)
        setnexturl(res.data.next);
        setpreviousurl(res.data.previous);
        getpokeman(res.data.results)
        setloading(false)
        console.log(pokdata)
    }
    const getpokeman=async=>async(res)=>
res.map(async(item)=>{
const result= await axios.get(item.url)
setpokedata(state=>{
    state=[...state,results.data]
    state.sort((a,b)=>a.id>b.id?1:-1)
    return state;
})
})
}
useEffect(()=>{
  pokefun();
  1},[url])
  return(
    <>
    <div className="container">

        <div className="left-content">
            <card pokemon={pokedata} loading={loading} infopokemon={poke=>setpokedex(poke)}/>
<div className="btn-group">
    <button onClick={()=>{setpokedata([]), setUrl(previousUrl())}}>previous</button>
    <button onClick={()=>{setpokedata([]), setUrl(nextUrl())}}>next</button>
</div>
        </div>
        <div className="right-content">
            <pokeinfo data={pokedex}/>
        </div>
    </div>
    </>
  )  

export default Main;