import Card from './Card.jsx';
import { pokemon } from '../data/pokemon.js';
import '../styles/boardStyle.css';
import { useState } from 'react';

export default function Board() {
    
    const [rerenderKey, setRerenderKey] = useState(false);

    const handleChildClick = (index) => {
        setRerenderKey(!rerenderKey);
        console.log(`${pokemon[index]} was clicked!`)
    }


    function shuffler(array) {
        let newList = array.sort(() => Math.random() - 0.5);
        return newList
    }
    
    let shuffledPokemon = shuffler(pokemon)
    
    return (
        <div id="board" key={rerenderKey}>
            {shuffledPokemon.map((poke, index) => (
                <Card key={index} index={index} onChildClick={() => handleChildClick(index)}/>
            ))}
        </div>
    )
}