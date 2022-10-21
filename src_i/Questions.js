
import { useState } from "react";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Questions = ({ data, dataReady, fetchData, errorMsg, loading, setLoading, setDataReady }) => {
    const [arrayId, setArrayId] = useState([]);
    const [checkAnswer, setCheckAnswer] = useState(true);
    const [finalResult, setFinalResult] = useState(0);
    const [popUp, setPopUp] = useState(false);
    const radioButtons = document.querySelectorAll("input[type='radio']");
    const checkedButtons = document.querySelectorAll("input[type='radio']:checked + span")
    const [clickedId, setClickedId] = useState([])
    const checkedButtonsArr = []
    let correctAnswers
    let objectId = null



    if (dataReady) {
        data.map((item) => {
            if (!arrayId.includes(item.id) && arrayId.length < 3) {
                objectId = {}
                setArrayId(prevData => {
                    return [...prevData, item.id]
                }
                )
            }
        })
        correctAnswers = data.map(({ correct }) => {
            return correct
        })
    }
    if (arrayId.length > 0) {
        objectId = Object.assign({}, arrayId)
    }

    const handlePopUp =()=>{
        setPopUp(true)
    }


    const handleSubmit = () => {
        if (checkedButtons.length === 5) {
            setCheckAnswer(prevState => !prevState)
            radioButtons.forEach((element) => {
                element.disabled = true
                element.checked = false

            })
            checkedButtons.forEach((element) => {
                if (correctAnswers.includes(element.textContent)) {
                    element.style.backgroundColor = '#94d7a2';
                }
                else { element.style.backgroundColor = '#F8BCBC' }
            })

        }
        else {
          console.log(checkedButtons.length)
          handlePopUp()
        }
        console.log(clickedId);




    }
    const handleRestart = () => {
        setDataReady(false)
        setFinalResult(0)
        setClickedId([])
        setLoading(true)
        fetchData();
        radioButtons.forEach((element) => {
            element.disabled = false
            element.style.backgroundColor = 'none'
        })
        setCheckAnswer(prevState => !prevState)
    }




    const handleChange = (entry, correct, event, id) => {
        const { name } = event.target;

        if (entry === correct) {
            setFinalResult(prevState => prevState + 1)
        }
        if (!clickedId.includes(id)){
            setClickedId((prevState)=>{
                return [...prevState, id]
            })
        }
       

    }



    return (
        <div className="questions">
            {popUp && <div className="pop-up d-flex">
                <div className="inner d-flex flex-column align-items-center px-5 mx-2 mx-md-0">
                    <FontAwesomeIcon icon={faXmarkCircle} 
                    style={{cursor: 'pointer', position: 'absolute', top: '15px', right: '15px', color: '#4D5B9E'}}
                    onClick={()=>{
                        console.log(checkedButtons.length)
                        setPopUp(false)
                    }}
                     />
                    <h6 className="my-auto ">Kindly complete your Quiz, Thank You!</h6>
                </div>
            </div>}
            {loading && !dataReady && <h2>Loading ...</h2>}
            {!loading && !dataReady && <h2>{errorMsg}</h2>}
            <div className="question-page ">
                {dataReady && data.map((item) => (
                    <div className="each-question" key={item.id}>
                        <h3>{item.question}</h3>
                        {data && <div
                        >
                            <form id='for-form' className="d-flex flex-wrap mt-2">
                                <label ><input required type="radio" value={item[0]} onChange={(e) => handleChange(item[0], item.correct, e, item.id)} name={item.id} /><span className={`
                                ${!checkAnswer && item[0] === item.correct ? 'right' : ''}
                                ${!checkAnswer && item.correct!== item[0]? 'muted': ''} `} >{item[0]}</span></label>
                                <label ><input required type="radio" value={item[1]} onChange={(e) => handleChange(item[1], item.correct, e, item.id)} name={item.id} /><span className={`
                                ${!checkAnswer && item[1] === item.correct ? 'right' : ''} ${!checkAnswer && item.correct!== item[1]? 'muted': ''} `} >{item[1]}</span></label>
                                <label ><input required type="radio" value={item[2]} onChange={(e) => handleChange(item[2], item.correct, e, item.id)} name={item.id} /><span className={`
                                ${!checkAnswer && item[2] === item.correct ? 'right' : ''}
                                ${!checkAnswer && item.correct!== item[2]? 'muted': ''} `} >{item[2]}</span></label>
                                <label ><input required type="radio" value={item[3]} onChange={(e) => handleChange(item[3], item.correct, e, item.id)} name={item.id} /><span className={`
                                ${!checkAnswer && item[3] === item.correct ? 'right' : ''}
                                ${!checkAnswer && item.correct!== item[3]? 'muted': ''} `} >{item[3]}</span></label>
                            </form>
                        </div>}
                    </div>
                ))}
            </div>


            {dataReady && checkAnswer && <button onClick={handleSubmit} className="mid-button mx-auto" >Check answers</button>}
            {!checkAnswer && <div className="my-row try-again mx-auto my-auto ">
                <p>You scored {finalResult}/5 answers</p>
                <button onClick={handleRestart} className='mid-button play-again' style={{ padding: `${!checkAnswer ? '8px 14px' : ''}` }}>Play again</button>
            </div>}


        </div>
    );
}

export default Questions;