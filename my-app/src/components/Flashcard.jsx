import { useState } from 'react'

export const Flashcard = ({person, mode}) => {
    const { name, image, description, verdict } = person
    const [back, setBack] = useState(false)

    const flip = () => {
        setBack(!back)
    }

    return (
        <div className={`card ${mode === 'study' && back ? 'flip' : ''}`} onClick={flip}>
            <div className='content'>
                <div className='front'>
                    <img src={image} alt={`Image of ${name}`}/>
                </div>
                <div className='back'>
                    <div className='description'>
                        <h4>Name: {name}</h4>
                        <h4>Verdict: <span id={verdict === 'criminal' ? 'r' : 'g'}>{verdict}</span></h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}