import React, {useState, useContext, useEffect} from "react"
import Logo from "../../Images/Characters-Logo-Color.png"
import CharactersCard from "./CharactersCard"
import { AxiosContext } from "../Context/AxiosContext"

const CharactersDisplay = () => {
    
    const {character, charactersList, GetAllCharacters} = useContext(AxiosContext) 

    useEffect(() => {GetAllCharacters()}, [])

    const mappedCharacterList = charactersList.map((param1) => {
    return(
        <div>
            <ul>
                <CharactersCard {...param1} 
                    key = {param1.id}
                    id = {param1.id}
                    data = {charactersList}
                    img = {param1.img}
                />
            </ul>
        </div>
        )
    })

    let mappedPsiPowers = character.psiPowers.map((psiPower) => <img className="tiny" src={psiPower.img}/>)
    console.log(mappedPsiPowers)

    console.log(mappedPsiPowers)
    return (
        <main className="homeDisplay">
            <img className="pageHeader" src={Logo} />
            <div>
                <div className="ugly--display">
                    <h2> Name: {character.name}</h2>
                    <img src={character.img} placeholder="Image"/>
                    <br/>
                    Gender: {character.gender}
                    <br/>
                    <div>
                        Psychic Abilities: {mappedPsiPowers}
                    </div>
                </div>
                <div className="uglyViewer"> 
                    <label>Select a Character to Learn More!</label>
                    <ul className="ul">
                        {mappedCharacterList}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default CharactersDisplay