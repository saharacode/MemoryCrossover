import React from 'react';
import './sortDropdown.css'

type Props = {
    onChange:(event:string) => void
}

function SortDropdown(props:Props) {
    const handleSortChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        props.onChange(selectedOption);
    };

    return (
        <select className="select" onChange={handleSortChange}>
            <option value="score-desc">Score absteigend</option>
            <option value="score-asc">Score aufsteigend</option>
            <option value="timestamp-desc">Zeitstempel absteigend</option>
            <option value="timestamp-asc">Zeitstempel aufsteigend</option>
        </select>
    );
}

export default SortDropdown;