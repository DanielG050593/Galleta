import getrandomElementFromArray from "../utils/randomElementFromArray"
import phrase from '../utils/phrases.json'

const ButtonPhrase = ({ setPhraseRandom, setPathRandom, arrBackground }) => {

 const handleRandomPhrase = () => {
    const newRandomPhrase = getrandomElementFromArray(phrase)
   setPhraseRandom(newRandomPhrase)
   const newPath = getrandomElementFromArray(arrBackground)
   setPathRandom(newPath)

 }

  return (
    <button className='app__btn' onClick={handleRandomPhrase}>Ver otro</button>
  )
}

export default ButtonPhrase