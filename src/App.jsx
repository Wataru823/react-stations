import React, { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  // fetchで'https://dog.ceo/api/breeds/image/random'を取得し、URLを更新
  const getDogUrl = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setDogUrl(data.message);
  }

  return (
    <div>
      <h2>Dogアプリ</h2>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} alt="犬の画像" />
      <br />
      <button onClick={getDogUrl}>更新</button>
    </div>
  )
}
