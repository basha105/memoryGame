import { useEffect } from 'react';
import { useState } from 'react';

const pokemon = ['pikachu', 'squirtle', 'bulbasaur', 'charmander', 'mudkip', 'piplup', 'cyndaquil', 'munchlax', 'chimchar', 'oshawott', 'magikarp', 'meowth'];

async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemonData = await response.json();
    return pokemonData.sprites.front_default;
}

export default function BuildCard() {

    const [image, setImage] = useState('');

    useEffect(() => {
        async function getImage() {
            const myUrl = await getPokemon(pokemon[0]);
            setImage(myUrl);
        }
        getImage();
    }, []);

    

    return (
        <div>
            <img src={image} alt="" />
        </div>
    )


}