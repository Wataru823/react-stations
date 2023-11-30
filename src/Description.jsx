// @ts-check

import { useState } from 'react'
import DogImage from "./DogImage"

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  // fetchで'https://dog.ceo/api/breeds/image/random'を取得し、URLを更新
  const getDogUrl = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setDogUrl(data.message);
  }

  return (
    <>
      <p>犬の画像を表示するサイトです。</p>
      <DogImage imageUrl={dogUrl} />
      <br />
      <button onClick={getDogUrl}>更新</button>
    </>
  )
}

export default Description
