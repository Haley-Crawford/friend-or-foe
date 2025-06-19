import { useState } from 'react'
import { Flashcard } from './Flashcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Quiz = ({cards}) => {
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [guessed, setGuessed] = useState(false)

    const guess = (answer) => {

        if (!answer || !['programmer', 'criminal'].includes(answer.toLowerCase())) {
            alert('Please choose \'programmer\' or \'criminal\'!')
            return
        }

        setGuessed(true)
        document.getElementById('input').value = ''
        document.querySelector('.card').classList.add('flip')

        if (cards[index].verdict === answer.toLowerCase()) {
            setScore(score + 1)
        } 
    }

    const next = () => {
        document.querySelector('.card').classList.remove('flip')
        setTimeout(() => {
            setGuessed(false)     
            setIndex(index + 1)
        }, 1000)
    }

    return (
        <>
            <h1>Quiz Time!</h1>
            <Flashcard person={cards[index]} mode='quiz'/>
            <div className='flex-gap'>
                <div className='guess-div'>
                    <button onClick={(e) => guess(e.target.value)} value='programmer' disabled={guessed} className='btn'>Programmer</button>
                    <button onClick={(e) => guess(e.target.value)} value='criminal' disabled={guessed} className='btn'>Criminal</button>
                </div>
                <div className='guess-input'>
                    <p>Type your answer here: </p>
                    <input type='text' id='input' disabled={guessed} required/>
                    <button type='submit' onClick={() => guess(document.getElementById('input').value)} disabled={guessed} className='guess-btn'>Submit Guess</button>
                </div>
            </div>
            {
                guessed && <div className='controls-div'>
                    <button onClick={next} className='btn'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            }
        </>
    )
}