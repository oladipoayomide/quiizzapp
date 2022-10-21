{ "response_code" = 0, "results" = [{ "category": "Science: Mathematics", "type": "multiple", "difficulty": "medium", "question": "How many zeros are there in a googol?", "correct_answer": "100", "incorrect_answers": ["10", "1,000", "1,000,000"] }, { "category": "Science: Mathematics", "type": "multiple", "difficulty": "medium", "question": "What is the area of a circle with a diameter of 20 inches if &pi;= 3.1415?", "correct_answer": "314.15 Inches", "incorrect_answers": ["380.1215 Inches", "3141.5 Inches", "1256.6 Inches"] }, { "category": "Science: Mathematics", "type": "multiple", "difficulty": "medium", "question": "Which greek mathematician ran through the streets of Syracuse naked while shouting &quot;Eureka&quot; after discovering the principle of displacement?", "correct_answer": "Archimedes", "incorrect_answers": ["Euclid", "Homer", "Eratosthenes"] }, { "category": "Science: Mathematics", "type": "multiple", "difficulty": "medium", "question": "How many books are in Euclid&#039;s Elements of Geometry?", "correct_answer": "13", "incorrect_answers": ["8", "10", "17"] }, { "category": "Science: Mathematics", "type": "multiple", "difficulty": "medium", "question": "In the complex plane, multiplying a given function by i rotates it anti-clockwise by how many degrees?", "correct_answer": "90", "incorrect_answers": ["180", "270", "0"] }] }

category
:
"Science: Mathematics"

difficulty
:
"medium"

:
"In the hexadecimal system, what number comes after 9?"
type
:
"multiple"

{/* <Button option={item[0]} handleClick={pickAnswer} correct={item.correct} id={item.id} clicked={false}  optionId={0}  />
                    <Button option={item[1]} handleClick={pickAnswer} correct={item.correct} id={item.id}  clicked={false}  optionId={1} />
                    <Button option={item[2]} handleClick={pickAnswer} correct={item.correct} id={item.id}  clicked={false} optionId={2}  />
                    <Button option={item[3]} handleClick={pickAnswer} correct={item.correct} id={item.id} clicked={false}  optionId={3}  /> */}

{/* <button  className={`${indexArray.includes(item.id)  && optionArray.includes(item[0])? 'picked': ''}`} onClick={() => pickAnswer(item[0], item.correct, item.id, item[0])}>{item[0]}</button>
                    <button className={`${indexArray.includes(item.id) && optionArray.includes(item[1])? 'picked': ''}`} onClick={() => pickAnswer(item[1], item.correct, item.id, item[1])}>{item[1]}</button>
                    <button className={`${indexArray.includes(item.id) && optionArray.includes(item[2])? 'picked': ''}`} onClick={() => pickAnswer(item[2], item.correct, item.id, item[2])}>{item[2]}</button>
                    <button className={`${indexArray.includes(item.id) && optionArray.includes(item[3])? 'picked': ''}`} onClick={() => pickAnswer(item[3], item.correct, item.id, item[3])}>{item[3]}</button> */}


style = {{ background: `${!checkAnswer && item[0] === item.correct ? '#94d7a2' : ''}` }
style = {{ background: `${!checkAnswer && item[1] === item.correct ? '#94d7a2' : ''}` }}
style = {{ background: `${!checkAnswer && item[2] === item.correct ? '#94d7a2' : ''}` }}
style = {{ background: `${!checkAnswer && item[3] === item.correct ? '#94d7a2' : ''}` }}

const pickAnswer = (picked, answer, id, optionId) => {
    if (picked === answer) {
        console.log('correct')
    }
    else {
        console.log('error')
    }
    setIndexDB(id);
    setOptionIndex(optionId);
    if (!indexArray.includes(id)) {
        setIndexArray(prevState => {
            return [...prevState, id]
        })

    }

    if (optionArray.includes(picked))
        setOptionArray(prevState => {
            const index = prevState.indexOf(picked)
            prevState.splice(index, 1)
            return [
                ...prevState
            ]
        })
    else {
        setOptionArray(prevState => {
            prevState.push(picked)
            return [
                ...prevState
            ]
        })
    }
    console.log(optionArray)

}

const [indexDB, setIndexDB] = useState(null)
const [optionIndex, setOptionIndex] = useState(false)
const [indexArray, setIndexArray] = useState([])
const [optionArray, setOptionArray] = useState([])


    // const [formData, setFormData] = useState({
    //     [objectId['0']]: '', [objectId['1']]: '', [objectId['2']]: '', [objectId['3']]: '', [objectId['4']]: ''
    // })
    setFormData(prevData => {
        return {
            ...prevData, [name]: entry === correct ? true : false
        }
    })
