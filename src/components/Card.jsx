import { useState, useEffect } from 'react';
import { pokemon } from '../data/pokemon.js';
import '../styles/cardStyle.css';

// eslint-disable-next-line react/prop-types
export default function Card({ index, onChildClick }) {
    const [imageUrl, setImageUrl] = useState('');
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked);
        console.log(`${pokemon[index]} was clicked!`);
    }

    async function fetchImage() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon[index]}`);
        const data = await response.json();
        return data.sprites.front_default;
    }

    useEffect(() => {
        async function loader() {
            const newUrl = await fetchImage();
            setImageUrl(newUrl);
        }
        loader();
    }, []);

    return (
        <div id="card" onClick={onChildClick}>
            <img src={imageUrl}></img>
        </div>
    )
}