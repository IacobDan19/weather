// @ts-check
import Head from 'next/head'
import styles from '../components/main.module.css'
import React, {useState} from 'react'
import Image from 'next/image'
//api key a043be078b67fca90c8134845e48f774

// Declare a new state variable, which we'll call "response"  

export default function Home() {
  const [response, setResponse] = useState('');
  const [cityName, setCityName] = useState('');

  const submitContact = async (event) => {
    event.preventDefault();
    const name = cityName
    try{
    const res = await fetch(`${process.env.url}/data/2.5/weather?q=${name},${process.env.apiKey}`);
    const result = await res.json();
    const rez=`The weather in ${name}: ${result.weather[0].description}`;
    setResponse(rez)
    }
    catch(error){
      console.log(error)
    }
    
  };

  const handleChange = (e) => {
    setCityName(e.target.value)
  }

  return (
    <div className="container">
      <Head>
        <title>Weather app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
          <h1 className="title">
          </h1>
          <div className={styles.search}>
              <div className={styles.information}>
              <div className='cityName'> Please enter your city</div>
                <label htmlFor='city'>City name</label>
                <input value={cityName}   id="city" name="city" onChange={handleChange}/>
                <button onClick={submitContact}>
                Click me!
                </button>
              </div>
          </div>    
       
        <div>{response!='' && <p>{response}</p>}</div>
        <Image
              src="/../public/city.jpg"
              alt="city"
              width={500}
              height={500}
        />
        </main>
    </div>
  )
}