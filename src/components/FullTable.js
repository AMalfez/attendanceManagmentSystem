import React from "react";
import '../css/FullTable.css'
function FullTable(prop) {
    const studentArr = prop.students;

  return (
    <div className="fullTable">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Roll no.</th>
          <th>Attendance</th>
        </tr>
        </thead>
        <tbody>
            {studentArr.map((a)=>{
                return <tr>
                <td>{a.name}</td>
                <td>{a.rollno}</td>
                <td>{a.status}</td>
              </tr>
            })}
        </tbody>
      </table>
    </div>
  );
}

export default FullTable;
