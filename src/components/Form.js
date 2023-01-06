import React, { useState } from "react";
import '../css/Form.css'
import FullTable from "./FullTable";

const students=[
  {name: 'alfez',rollno:211120, status:'absent'},
  {name:'abhay', rollno:211121,status:'absent'},
  {name:'ajit', rollno:211122,status:'absent'},
  {name:'anirudh', rollno:211123,status:'absent'},
  {name:'arbaj', rollno:211124,status:'absent'},
  {name:'waseem', rollno:211125,status:'absent'},
  {name:'arun', rollno:211126,status:'absent'},
  {name:'anurag', rollno:211127,status:'absent'},
  {name:'deepti', rollno:211128,status:'absent'},
  {name:'disha', rollno:211129,status:'absent'},
  {name:'archi', rollno:211130,status:'absent'}
];

function Form() {
    const [attendance, setAttendance] = useState([...students]);
    let name;
    let rollno;

    const handleName = (e)=>{
        name=e.target.value
    }
    const handleRollno = (e)=>{
        rollno=e.target.value
    }

    const handleAttendance = (e) => {
    e.preventDefault();
    const test = students.filter(a=>a.name===name);

    //testing if student exists
    if (test.length!==0) {

      //marking attendance
      const otherStudent = attendance.filter(a=>a.name!==name)
      const newArr = [...otherStudent,{name:name,rollno:rollno,status:'present'}]
      setAttendance(newArr)
      alert('Attendance marked.')
     
    } else{
      alert('Invalid credentials.')
    }
    
  };
  console.log(attendance);

  return (
    <div className="form">
      <form onSubmit={handleAttendance}>
          <input type="text" name="name" placeholder="Enter your name" onChange={handleName}/>
          <input type="text" name="rollnumber" placeholder="Enter your Roll number" onChange={handleRollno}/>
        <input type="submit" value="Mark my present" />
        <div style={{display:'block',marginTop:'120px', paddingBottom:'20px'}}><FullTable students={attendance} /></div>
      </form>
    </div>
  );
}

export default Form;

