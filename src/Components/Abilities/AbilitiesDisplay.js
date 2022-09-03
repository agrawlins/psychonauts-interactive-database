import React, {useState, useContext, useEffect} from "react"
import Logo from "../../Images/Abilities-Logo-Color.png"
import AbilitiesCard from "./AbilitiesCard";
import { AxiosContext } from "../Context/AxiosContext"

const AbilitiesDisplay = () => {
    const {ability, character, abilitiesList, GetAllAbilities} = useContext(AxiosContext)

    useEffect(() => {GetAllAbilities()}, [])

    let mappedAbilitiesList = abilitiesList.map((param1) => {
        return(
            <div>
                <ul>
                    <AbilitiesCard {...param1} 
                        key = {param1.id}
                        id = {param1.id}
                        data = {abilitiesList}
                        img = {param1.img}
                    />
                </ul>
            </div>
            )
        })
    
    return (
        <main className="homeDisplay">
            <img className="pageHeader" src={Logo} />
            <div>
                <div className="ugly--display">
                    <h2>{ability.name}</h2>
                    <img src={ability.img} placeholder="Image"/>
                    <br/>
                    {ability.description}
                </div>
                <div className="uglyViewer">
                    <ul className="ul">
                        {mappedAbilitiesList}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default AbilitiesDisplay