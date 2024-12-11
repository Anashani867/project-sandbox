import React from 'react'
import Title from '../components/Title'

export default function RandomizeColor() {

function handleClick(e){
    // console.log("click");
    console.log(e.target);

}

const handleSecClick =(e) =>{
    // console.log(e.target);
    // console.log(getRandomColor());

    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
}



function getRandomColor() {
    let letters = "0123456789ABCDEF"; // Hexadecimal digits
    let color = "#"; // Start with the '#' symbol
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Generate random color component
    }
    return color; // Return the random color
}

  return (
    <div className='container m-auto text-center'>
        <Title  text={"RandomizeColor"} classes={"my-4"}/>

      <button className='btn btn-danger' onClick={(e) => handleClick(e)}>Click me</button>
      {/* onClick={handleClick()}  تسدعي القيمة مباشرة بدون ضغط*/ }
      <button className='btn btn-success' onClick={handleSecClick}>Click me</button>
      <button className='btn btn-primary' onClick={handleSecClick}>Click me</button>
      <button className='btn btn-warning'onClick={handleSecClick}>Click me</button>
    </div>
  )
}
