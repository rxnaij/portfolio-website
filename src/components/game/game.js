import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'

const GameSection = () => {
    const [ counter, setCounter ] = useState(0)
    const [ fortune, setFortune ] = useState('')

    const readFortune = counter => {
        let f
        if (counter < 0) {
            f = `Wait...how can you donate ${counter} apples? You stole some, didn't you? Give them back, you thief!`
        } else if (counter > 0 && counter <= 5) {
            f = `Small blessings await your heart today when Instagram is left untouched.`
        } else if (counter > 5 && counter <= 10) {
            f = `Cleanse your browser of all but 5 tabs to ensure prosperity and good fortune today.`
        } else if (counter > 10 && counter <= 15) {
            f = `Your penchance for intellectual enrichment is high today. Secure this potential by reading one (1) article sitting in your bookmarks.`
        } else if (counter > 15) {
            f = `Thank you for your generous donation. Sow seeds for your year's fortune by sending a friend or loved one one (1) positive message or comment.`
        }
        setFortune(f)
    }

    return(
        <section>
            <Container>
                <h2>Bonus Game</h2>
                <div>Donate apples to hear your internet fortune.</div>
                <div>
                    <div>
                        Apples: { counter }
                    </div>
                    <button onClick={ () => setCounter(counter - 1) } >-</button>
                    <button onClick={ () => setCounter(counter + 1) }>+</button>
                    <button onClick={ () => readFortune(counter) }>Donate</button>
                    <button onClick={ () => { setFortune(''); setCounter(0) } }>Clear</button>
                    <div id="fortune-reading">
                        { fortune }
                    </div>
                </div>
                
            </Container>
        </section>
    )
}

export default GameSection