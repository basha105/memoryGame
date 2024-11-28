import Card from './Card.jsx';
import { pokemon } from '../data/pokemon.js';
import '../styles/boardStyle.css';

export default function Board() {

    return (
        <div id="board">
            {pokemon.map((poke, index) => (
                <Card key={index} index={index} />
            ))}

        </div>
    )
}