import Headers from './Header'
import Description from './Description'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Headers />
      <Description />
    </div>
  )
}
