import React, { useState } from 'react'

var initialStudents = [
    {id: 1, name: 'Ayxan', score:0},
    {id: 2, name: 'Cavid', score:0},
    {id: 3, name: 'Ehmed', score:0},
]


export default function Students() { 
  const [students, setStudents] = useState(initialStudents);


  function handleClick(s){
    const newstudents = students.map(student => {
        if (student.id === s.id){
            return {
                ...student,
                score: student.score + 10
            }
        }
        return student;
    })
    setStudents(newstudents);
  }

  return (
    <div>
        <ul>
            {
                students.map(student => (
                    <li key={student.id} style={{display:'flex', gap:"50px"}}>
                        <h1>{student.id}</h1>
                        <h1>{student.name}</h1>
                        <h1>{student.score}</h1>
                        <button onClick={() => {
                            handleClick(student)
                        }}>Increase Score</button>
                    </li>


                ))
            }
        </ul>
    </div>
  )
}
