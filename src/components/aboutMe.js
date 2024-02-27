import React from 'react';
import { DataItem } from './dataItem';
import { useState } from 'react';

export const AboutMe = () => {
    const [items, setItems] = useState([
        {"name": "burger", "price": 5.6},
        {"name": "taco", "price": 5.6},
        {"name": "burrito", "price": 5.6}])

    function handleClick() {
        let temp = [...items];
        if (temp[0].name === 'milkshake') {
            temp[0].name = 'burger'
        } else {
            temp[0].name = 'milkshake'
        }
        
        setItems(temp)
        console.log(temp)
    }

    return (
        <div>
            <h1>About Me</h1>
            <p>all about me</p>
            <button onClick={handleClick}>change something</button>
            <DataItem menu={items} message={'hello'} title={"bob's burgers"}/>
        </div>
    )
}



