import Card from './Card.jsx';
import { pokemon } from '../data/pokemon.js';
import '../styles/boardStyle.css';

export default function Board() {

        

    function shuffler(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    let shuffledPokemon = shuffler(pokemon);

    return (
        <div id="board">
            {shuffledPokemon.map((poke, index) => (
                <Card key={index} index={index}/>
            ))}
        </div>
    )
}