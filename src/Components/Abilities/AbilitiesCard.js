import React, {useState, useContext} from "react";
import { AxiosContext } from "../Context/AxiosContext";

const AbilitiesCard = (props) => {
    const [abilitiesCard, setAbilitiesCard] = useState({
        img: props.img,
        name: props.name,
        description: props.description,
    })
    const {GetOneAbility} = useContext(AxiosContext)

  return(
      <div className="ugly--list">
        <button key={props.id} id ={props.id} onClick={() => {GetOneAbility(abilitiesCard)}}>
            <img src={abilitiesCard.img} className="ugly--image"/>
        </button>
    </div>    
  )
}

export default AbilitiesCard