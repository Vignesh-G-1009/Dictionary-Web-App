import React, { useEffect, useState } from 'react'
import findWord from './Services';
import Dictionary from './components/Dictionary';
import './index.css'

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const App = () => {

  const [dictionary, setDictionary] = useState(false);

  const getWord = async (word) => {

    try {
      const data = await(findWord(word));

      console.log(data);

      setDictionary({
        word: capitalize(data[0].word),
        phonetic: data[0].phonetic,
        definition1: data[0].meanings[0].definitions[0].definition,
        example1: data[0].meanings[0].definitions[0].example,
        definition2: data[0].meanings[0].definitions[1].definition,
        synonyms: data[0].meanings[0].synonyms[0],
        parts: capitalize(data[0].meanings[0].partOfSpeech),
        audio: data[0].phonetics[0].audio,
      });

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWord('Play');
  }, []);


  return (
    <div className='app'>
      <Dictionary 
      word = {dictionary.word}
      pos = {dictionary.parts}
      def1 = {dictionary.definition1}
      def2 = {dictionary.definition2}
      ex1 = {dictionary.example1}
      syn = {dictionary.synonyms}
      phon = {dictionary.phonetic}
      search = {getWord}
      audio = {dictionary.audio}
      />
    </div>
  )
}

export default App
