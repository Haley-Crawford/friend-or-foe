export const Home = ({ cards }) => {
    return (
        <>
            <div className='home'>
                <h1>Friend or Foe?</h1>
                <h2>How well can you spot the difference between famous <span id='g'>computer scientists</span> and <span id='r'>career criminals </span>? Take the quiz to find out!</h2>
                <p id='emoji'>🤔</p>
                <p>Number of cards: {cards.length}</p>
            </div>
        </>
    )
}