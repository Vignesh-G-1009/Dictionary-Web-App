import React, { useRef} from 'react'
import './Dictionary.css'
import play from '../assets/play-button.png'

const playAudio = () => {
  var audio = document.getElementById('myAudio');
  audio.play();
}

const Dictionary = (data) => {

  const inputRef = useRef();

  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='flex flex-col justify-between h-2/5 w-screen p-10'>
        <div className='flex items-center justify-between'>
          <p className='dict'>Dictionary</p>
          <div className='search-container'>
            <input className='search-input' type='text' ref={inputRef} placeholder='Enter a word...'></input>
            <button className='search-button' onClick={() => data.search(inputRef.current.value)}>Search</button>
          </div>
        </div>
        <div className='flex items-center justify-between px-20'>
          <p className='word pb-2'>{data.word}</p>
          <div className='phonetic space-x-2' onClick={playAudio}>
            <audio id="myAudio" src={data.audio}></audio>
            <img className='size-5' src={play} alt='play'></img>
            <p>{data.phon}</p>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='div1'>{data.pos}</div>
        <div className='div2'>
            <div className='div21 space-y-5'>
                <p className='dh1'>Definition 1</p>
                <p className="def1">• {data.def1}</p>
            </div>
            <div className='div22 space-y-5'>
              <p>Synonym</p>
              <p className='content'>{data.syn}</p>
            </div>
        </div>
        <div className='div3'>
            <div className='div31 flex flex-col space-y-5'>
              <p className='text-white opacity-55 text-2xl'>Definition 2</p>
              <p className='def2'>• {data.def2}</p>
            </div>
            <div className='div32 flex flex-col space-y-5'>
              <p className='text-white opacity-55 text-2xl'>Example</p>
              <p className='def2'>• {data.ex1}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dictionary
