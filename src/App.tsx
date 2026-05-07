import './styles.css'
import IMAGE from './image.jpg'
import SVG from './vercel.svg'
import { Counter } from './Counter'

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <h1>React TypeScript Webpack Starter</h1>
      <div
        style={{
          border: '1px solid white',
          padding: '10px',
          marginBottom: '20px',
        }}
      >
        <h3> Environment Variables:</h3>
        <p>
          <strong>NODE_ENV:</strong> {process.env.NODE_ENV}
        </p>
        <p>
          <strong>Name (from Webpack):</strong> {process.env.name}
        </p>
      </div>

      <img src={IMAGE} alt="Sample" width={'300'} height="300" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat
        accusantium necessitatibus itaque odit repellendus.
      </p>
      <img src={SVG} alt="Vercel Logo" width={'300'} height="300" />

      <Counter />
    </div>
  )
}
