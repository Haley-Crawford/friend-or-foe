import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Study } from './components/Study'
import { Quiz } from './components/Quiz'
import './App.css'

function App() {
  const flashcards = [
    {
      name: "Adrian Lamo",
      image: "src/assets/lamo.jpg",
      description: "Known as the 'homeless hacker,' Lamo accessed systems like The New York Times and Yahoo!, alerting companies to vulnerabilities. He later reported whistleblower Chelsea Manning to authorities.",
      verdict: "criminal"
    },
    {
      name: "Gary McKinnon",
      image: "src/assets/mckinnon.jpg",
      description: "A British hacker who broke into U.S. military computers, claiming to search for evidence of UFOs. He caused no damage but faced potential extradition to the U.S.",
      verdict: "criminal"
    },
    {
      name: "Robert T. Morris",
      image: "src/assets/morris.jpg",
      description: "Created the first computer worm, the Morris Worm, in 1988 as an experiment. It inadvertently caused widespread disruption, leading to his conviction under the Computer Fraud and Abuse Act.",
      verdict: "programmer"
    },
    {
      name: "Kevin Mitnick",
      image: "src/assets/mitnick.jpg",
      description: "Once one of the FBI's most-wanted cybercriminals, Mitnick hacked into dozens of systems. After serving time, he became a security consultant and author.",
      verdict: "criminal"
    },
    {
      name: "Matthew Keys",
      image: "src/assets/keys.jpg",
      description: "A former Reuters journalist who provided login credentials to the hacker group Anonymous, leading to unauthorized access of a Tribune website.",
      verdict: "criminal"
    },
    {
      name: "Jonathan Grier",
      image: "src/assets/grier.jpg",
      description: "A computer scientist known for his work in digital forensics and insider data theft, contributing to the field's development.",
      verdict: "programmer"
    },
    {
      name: "Sarah Gordon",
      image: "src/assets/gordon.jpg",
      description: "Pioneered research in computer virus analysis and computer security, introducing terms like 'vX' for Virus Exchange.",
      verdict: "programmer"
    },
    {
      name: "Bill Buchanan",
      image: "src/assets/buchanan.jpg",
      description: "A professor at Edinburgh Napier University, Buchanan leads research in cybersecurity and digital identity, focusing on applied cryptography.",
      verdict: "programmer"
    },
    {
      name: "Mark Abene",
      image: "src/assets/abene.jpg",
      description: "A member of the hacker group Masters of Deception, Abene was arrested for computer tampering and trespass in the early 1990s.",
      verdict: "criminal"
    },
    {
      name: "Lauri Love",
      image: "src/assets/love.jpg",
      description: "A British student who hacked into U.S. government computers, citing a desire to expose security flaws. He faced potential extradition to the U.S.",
      verdict: "criminal"
    },
    {
      name: "Aaron Swartz",
      image: "src/assets/swartz.jpg",
      description: "A programming prodigy and internet activist who was charged with downloading academic journal articles from JSTOR with the intent to distribute them.",
      verdict: "programmer"
    },
    {
      name: "Kevin Poulson",
      image: "src/assets/poulson.jpg",
      description: "Known as 'Dark Dante,' Poulson hacked into a radio station's phone system to win a Porsche, leading to his arrest.",
      verdict: "criminal"
    },
    {
      name: "Steve Wozniak",
      image: "src/assets/wozniak.jpg",
      description: "Co-founder of Apple Inc., Wozniak was involved in phone phreaking during his youth, manipulating phone systems to make free long-distance calls.",
      verdict: "programmer"
    }
  ]
  
  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home cards={flashcards} />} />
            <Route path='/study' element={<Study cards={flashcards} />} />
            <Route path='/quiz' element={<Quiz cards={flashcards} />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
