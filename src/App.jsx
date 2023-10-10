// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <h2>Dogアプリ</h2>
      <p>犬の画像を表示するサイトです。</p>
      {/* Dog APIを使用 */}
      <img src="https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg" alt="犬の画像" />
    </div>
  )
}
