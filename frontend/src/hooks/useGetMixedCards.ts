import { useEffect, useState } from 'react';
import axios from "axios";
import {CardCharacter} from "../model/CardCharacter";

function useGetMixedCards(url:string) {
    const [randomNCharacters, setRandomNCharacters] = useState<CardCharacter[]>([]);
    const [cards, setCards] = useState<CardCharacter[]>([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(loadRandomCharacters, []);

    function loadRandomCharacters() {
        axios.get(url).then(response => {
            setRandomNCharacters(response.data);
        });
    }

    useEffect(() => {
        setCards(randomNCharacters.map((card) => {
            return {...card, hidden: true}
        } ));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [randomNCharacters]);

    return { cards, loadRandomCharacters };
}

export default useGetMixedCards;