import React,{useState} from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {

const inputStyle={
    border : "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0"
};

const [name,setName]= useState("Your signatuer");
const [date,setDate]= useState();

const handleNameChange =  (e) =>{
  // console.log(e.target.value);
  setName(e.target.value);
};

const handleDateChange =  (e) =>{
  // console.log(e.target.value);
  setDate(e.target.value);
};

document.body.style.background ="#eee";

return (
  <div className='container text-center'>
      <Title classes={"title"} text={name} />
      <Title classes={"main-title my-4"} text={!date ? "select date" : date} />
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi odio cum aspernatur delectus nulla nesciunt deserunt perferendis nihil, laborum enim culpa, porro obcaecati suscipit sapiente maiores? Placeat sapiente vel velit!</p> 

<footer className="d-flex"style={{justifyContent:"space-around", position:"relative",top:"40vh"}}>
<input type="date" value={date} style={inputStyle} onChange={handleDateChange}  />
<input type="text" value={name} style={inputStyle} onChange={handleNameChange} />
</footer>

</div>
)

 
}
