import React, {useState, useContext} from "react";
import { AxiosContext } from "../Context/AxiosContext";

const CharactersCard = (props) => {
    const [charactersCard, setCharactersCard] = useState({
        gender: props.gender,
        img: props.img,
        name: props.name,
        psiPowers: props.psiPowers,
    })
    const {GetOneCharacter} = useContext(AxiosContext)

  return(
    <div className="ugly--list" >
        <button key={props.id} id ={props.id} onClick={() => {GetOneCharacter(charactersCard)}}>
            <img src={charactersCard.img} className="ugly--image"/>
        </button>
    </div>    
  )
}

export default CharactersCard