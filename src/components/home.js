import React, { useEffect } from 'react';
import '../App.css'
import { useState } from 'react';

export const Home = () => {
    const [clicked, setClicked] = useState(0);
    const [inputBox, setInputBox] = useState('');
    const [display, setDisplay] = useState('');
    const [dogsurl, setDogs] = useState('');

    // useEffect(() => {
    //     getDogs()
    // }, [])
    useEffect(() => {
        getDogs()
    }, [display])

    function handleClick() {
        setClicked(clicked + 1)
    }

    function handleTyping(event) {
        setInputBox(event.target.value)
    }

    function displayParagraph() {
        setDisplay(inputBox)
    }

    async function getDogs() {
        const response = await fetch("https://dog.ceo/api/breed/hound/images/random");
        const data = await response.json();
        console.log(response, data)

        if (response.ok) {
            // let breeds = []; 
            // const keys = Object.keys(data)
            // keys.forEach( dogbreed => {
            //     breeds.append(data[dogbreed])
            // });
            console.log(data.Object)
            setDogs(data.message)
        }
    }

    const cars = ["volvo", "bmw", "toyota"]
    return (
        <div>
            <h1 className='red'>Home</h1>
            {/* <p>This is the number of times clicked: {clicked}.</p>
            <button onClick={handleClick}>click me!</button> */}

            <p>{display}</p>
            <input value={inputBox} onChange={handleTyping}/>
            <button onClick={displayParagraph}>submit form</button>
            <label for="cars">Choose a car:</label>
            <select name="cars" id="cars">
                {cars.map((car) => <option value={car}>{car}</option>)}
            </select>
            <br></br>
            {dogsurl ? <img src={dogsurl}/> : <p>Loading...</p>}
            {cars.map((toys) => <p>{toys}</p>)}
            {/* <p>volvo</p>
            <p>bmw</p>
            <p>toyota</p> */}

        </div>
    )
}


