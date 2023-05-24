
import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import randomElementaryFromArray from './utils/randomElementFromArray'

const arrBackground = [1, 2, 3, 4]

function App() {

   const initialPhrase = randomElementaryFromArray(phrases)
   const initialPath = randomElementaryFromArray(arrBackground)

   const [phraseRandom, setPhraseRandom] = useState(initialPhrase)
   const [pathRandom, setPathRandom] = useState(initialPath)  

   const objStyle = {
    backgroundImage: `url('/images/fondo${pathRandom}.jpg')`
    }

   return (
    <div style={objStyle} className='app'>
      <h1 className='app__title'>GALLETA DE LA FORTUNA</h1>
      <PhrasesCard phraseRandom = {phraseRandom}/>
      <ButtonPhrase 
      setPhraseRandom={setPhraseRandom}
      setPathRandom={setPathRandom}
      arrBackground={arrBackground}/>

    </div>
  )
}

export default App