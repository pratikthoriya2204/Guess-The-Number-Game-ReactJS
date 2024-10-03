import React, { useState } from 'react'
import { toast } from 'react-toastify';
import './style.css'
const GuassNumber = () => {

    const [data, setData] = useState({
        num: ""
    });
    const [matched, setMatched] = useState();
    const [randomNumber, setRandomNumber] = useState();
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));

    }
    const OnGuassNumber = (e) => {
        e.preventDefault();
        let mydigit = data.num;

        if (Number(mydigit) > 50 || Number(mydigit) <= 0) {
            alert("please enter number Between 1 to 50")
            return false;
        }
        const randomNumber = generateNumber();
        setRandomNumber(randomNumber);
        if (Number(mydigit) === randomNumber) {
            setMatched("your number is Mathced....")
            toast.success("You Win this game")
        }
        else if (Number(mydigit) + 10 > randomNumber) {
            setMatched("Your are near but little HIGHER" + "  " + "random Number is " + randomNumber)
        }
        else if (Number(mydigit) - 10 < randomNumber) {
            setMatched("Your are near but little Lower" + "  " + "random Number is " + randomNumber)
        }
        else {
            setMatched("your number is not Mathced...." + "  " + "random Number is " + randomNumber)
        }
    }
    const generateNumber = () => {
        const number = Math.floor(Math.random() * 50);
        return number;
    }

    return (
        <>
            <div className='container'>
                <h1>Guass The Number</h1>
                <h4>Guass any Number Between 1 to 50</h4>
                <form onSubmit={OnGuassNumber}>
                    <label htmlFor='num'>Enter a Number: </label>
                    <input type="number" name='num' id='num' onChange={onChangeHandler} value={data.num} />
                    <button type='submit'>Guass</button>
                    <p> {matched}</p>
                </form>
            </div>
        </>
    )
}

export default GuassNumber
