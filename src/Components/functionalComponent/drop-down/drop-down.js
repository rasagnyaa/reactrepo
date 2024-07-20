import React, { useState } from 'react';

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <label htmlFor="options">Fruits</label>
            <select id="options" value={selectedOption} onChange={handleChange}>
                <option value="">Select...ur fav fruit</option>
                <option value="option1">Mango</option>
                <option value="option2">Orange</option>
                <option value="option3">Apple</option>
            </select>
            {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>
    );
};

export default Dropdown;