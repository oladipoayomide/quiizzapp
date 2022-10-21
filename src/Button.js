import { useState } from "react"

const Button = ({ option, handleClick, id, correct, optionId, clicked }) => {
    const [clicke, setClicked] =useState(clicked)
    const handleClickTwo = () => { 
        setClicked(true)
        console.log(clicke)
    }
    return (
        <>
            <button
                onClick={() => {
                    handleClick(option, correct, id, optionId)
                    handleClickTwo()
                }}
                className={`${clicke ? 'picked' : ''}`}
            >{option}</button>
        </>
    );
}

export default Button;