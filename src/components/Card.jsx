import { useState, useEffect } from 'react';
import { pokemon } from '../data/pokemon.js';

export default function Card({}) {
    const [imgUrl, setImgUrl] = useState('');

    async function getImage(index) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon[index]}`);
        const pokeData = await response.json();
        return pokeData.sprites.front_default;
    }

    useEffect(() => {
        async function loader() {
            const newUrl = await getImage(index);
            setImgUrl(newUrl);
        }
        loader();
    }, []);

    return (
        <div>
            <img src={imgUrl} alt="" />
        </div>
    )

}