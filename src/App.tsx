//to fix this we r installed css-loader and style-loader
import "./styles.css";


import IMAGE from './image.jpg' //decloration.d.ts de jpg ni declare etdik ve webpacke yeni rule ekledik

import SVG from './vercel.svg' //decloration.d.ts de jpg ni declare etdik ve webpacke yeni rule ekledik


export const App = () => {
  return (
    <div style={{backgroundColor:"black"}}>
      <h1>React typescript webpack starter</h1>
      {/* bunu sadece bele import edib yuklemek hata verir bunun icin webpacke asset ile olan rules ekledk */}
      <img src={IMAGE} alt="" width={"300"} height="300"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat accusantium necessitatibus itaque odit repellendus.</p>
      <img src={SVG} alt="" width={"300"} height="300"/>
   
    </div>
  )
}