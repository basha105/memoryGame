import BuildCard from "./buildCard";
import { useState } from 'react';
import { useEffect } from "react";

export default function LoadCards() {

    const pokemons = ['pikachu', 'squirtle', 'bulbasaur', 'charmander', 'mudkip', 'piplup', 'cyndaquil', 'munchlax', 'chimchar', 'oshawott', 'magikarp', 'meowth'];
    const [cards, setCards] = useState([]);

    // Using useEffect because the display will update as the 'cards' load

    useEffect(() => {
        async function loader() {
            const loadedCards = await Promise.all(
                pokemons.map((pokemon, index) => BuildCard(index))
            );
            setCards(loadedCards);
        }
        loader();
    }, []);
    

    return (
        <div>{cards}</div>
    )


}