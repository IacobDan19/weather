// @ts-check
import Head from 'next/head'
import styles from '../public/layout.module.css'
import React, {useState} from 'react'
//api key a043be078b67fca90c8134845e48f774

// Declare a new state variable, which we'll call "response"  

export default function Home() {
  const [response, getResponse] = useState('');

  const submitContact = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name},uk&APPID=a043be078b67fca90c8134845e48f774`);
    const result = await res.json();
    const rez=`The weather in ${name}: ${result.weather[0].description}`;
    getResponse(rez)
  };

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
            <div className='information'>
            <div className='cityName'> Please enter your city</div>
            <form className='form' onSubmit={submitContact}>
                <label htmlFor='name'>City name</label>
                <input id='name' name='name' type='text' autoComplete='name' required />
                <button type='submit'>Submit</button>
            </form>
        </div>
        
    </div>
    <p>{response!='' && <p>{response}</p>}</p>
      </main>
    </div>
  )
}
