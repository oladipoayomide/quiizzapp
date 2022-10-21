const Intro = ({ handleEntry, entry }) => {


    return (
        <div className="intro-page">
            <h2>Quiizz App
            </h2>
            <p>Trying out random questions.</p>
            <button className="bold-button"
                onClick={handleEntry}
            >Start quiz</button>
            <p className="my-5">Developed with ❤ and React Js <br />
            by <a target="_blank" refs="noopener noreferrer"  href="https://www.linkedin.com/in/oladipoayomide/">Oladipo Ayomide</a>
            </p>



        </div>
    );
}

export default Intro;