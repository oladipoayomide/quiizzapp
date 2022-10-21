
import { useState, useEffect } from "react";
import Intro from "./Intro";
import Questions from "./Questions";
import top from "./images/up.svg"
import down from "./images/down.svg"

import { nanoid } from "nanoid";


const Main = () => {
    const [data, setData] = useState()
    const [dataReady, setDataReady] = useState(false)
    const [errorMsg, SetErrorMsg] = useState(null)
    const [loading, setLoading] = useState(true)

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const fetchData = () => {
        fetch('https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple')
        .then((res) => {
           
            if (!res.ok) {
                throw (Error('Unable to fetch data'));
        

           
            }
     
            setDataReady(false)
            SetErrorMsg(null)
            return res.json()
        })
        .then(raw => {


            setData(raw.results.map(item => {
                let options = item.incorrect_answers
                options.push(item.correct_answer)

                return {
                    question: item.question, ...shuffle(options), id: nanoid(),
                    correct: item.correct_answer

                }
            }))



        })
        .then(() => {
            setDataReady(true)
            setLoading(false)
        })
        .catch(err => {
            setDataReady(false)
            console.log(err.message)
            SetErrorMsg(err.message)
            setLoading(false)
        })



    }

    useEffect(() => {
       fetchData()
    }, [])




    const [entry, setEntry] = useState(false)
    const handleEntry = () => {
        setEntry(prevState => !prevState)
    }



    return (

        <div className="container py-5" > 
            <img src={top} alt="" style={{
                position: 'absolute',
                right: '0',
                top: '0',
                transition: 'all 0.3s linear',
                width: entry ? '20%' : '30%px'
            }} />

            <img src="" alt="" />

            <img src={down} alt=""
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    transition: 'all 0.3s linear',
                    width: entry ? '12%' : '35%'
                }}
            />

            {!entry && <Intro
                handleEntry={handleEntry}
                entry = {entry}

            />}
            {entry && errorMsg && <h3>{errorMsg}</h3>}
            {entry && !errorMsg && <Questions
                handleEntry={handleEntry}
                data={data}
                dataReady={dataReady}
                fetchData={fetchData}
                errorMsg= {errorMsg}
                loading={loading}
                setLoading={setLoading}
                setDataReady={setDataReady}
            />}

        </div>


    );
}

export default Main;