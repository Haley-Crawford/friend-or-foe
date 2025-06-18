export const Flashcard = ({person, handleGuess, guessed}) => {
    const { name, image, description, verdict } = person

    const handleClick = (e) => {
        handleGuess(verdict, e.target.value)
    }

    return (
        <div className={`card ${guessed ? 'reveal' : ''}`}>
            <h2>Friend or Foe?</h2>
            <div className='content'>
                <img src={image} alt={`Image of ${name}`}/>
                <div className='description'>
                    <div className='overview'>
                        <h4>Name: {name}</h4>
                        <h4>Verdict: <span id={verdict === 'criminal' ? 'r' : 'g'}>{verdict}</span></h4>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
            <div className='guess-div'>
                <button onClick={handleClick} value='programmer' disabled={guessed}>Programmer</button>
                <button onClick={handleClick} value='criminal' disabled={guessed}>Criminal</button>
            </div>
        </div>
    )
}