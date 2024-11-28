import { useState, useEffect } from 'react';
import { pokemon } from '../data/pokemon.js';
import '../styles/cardStyle.css';

// eslint-disable-next-line react/prop-types
export default function Card({ index }) {
    const [imageUrl, setImageUrl] = useState('');

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
        <div id="card">
            <img src={imageUrl}></img>
        </div>
    )
}