const Intro = ({ handleEntry, entry }) => {


    return (
        <div className="intro-page">
            <h2>Quizzical</h2>
            <p>Some description if needed</p>
            <button className="bold-button"
                onClick={handleEntry}
            >Start quiz</button>
        </div>
    );
}

export default Intro;