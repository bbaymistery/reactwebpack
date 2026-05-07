//to fix this we r installed css-loader and style-loader
import "./styles.css";


import IMAGE from './image.jpg' //decloration.d.ts de jpg ni declare etdik ve webpacke yeni rule ekledik

import SVG from './vercel.svg' //decloration.d.ts de jpg ni declare etdik ve webpacke yeni rule ekledik
  import { Counter } from './Counter'

/*
Counta tikliyrq 1 2 3 olur sonra Text deyisirik ve otomatik text deyisir update olur ama count 0 olur 
onu cozmeye calisdiq https://github.com/pmmmwh/react-refresh-webpack-plugin 

webpack dev e ekledik yeni seyler

ve package jsondaki openi kaldirib webpackdev.js e open acdik
*/
export const App = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "20px", minHeight: "100vh" }}>
      <h1>React TypeScript Webpack Starter</h1>
      <div style={{ border: "1px solid white", padding: "10px", marginBottom: "20px" }}>
        <h3>Environment Variables:</h3>
        <p><strong>NODE_ENV:</strong> {process.env.NODE_ENV}</p>
        <p><strong>Name (from Webpack):</strong> {process.env.name}</p>
      </div>

      <img src={IMAGE} alt="Sample" width={"300"} height="300" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat accusantium necessitatibus itaque odit repellendus.</p>
      <img src={SVG} alt="Vercel Logo" width={"300"} height="300" />

      <Counter />

  
    </div>
  )
}