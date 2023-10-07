import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import TableStudents from './components/TableStudents'

function App() {
  const loadedStudents=useLoaderData();
  const [students,setStudents]=useState(loadedStudents)
  const handleDelete=(_id)=>{
       fetch(`http://localhost:2000/student/${_id}`,{
        method:'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
        const remaining=students.filter(student=>student._id!==_id)
        if(data.deletedCount>0){
          alert('Deleted successfully')
          setStudents(remaining)
        }
        console.log(data)
       })
  }

  
 

  return (
    <>
        <table className="table  md:w-full">
      <thead>
        <tr>
          <th className="border">Name</th>
          <th className="border">Department</th>
          <th className="border">Skill</th>
          <th className="border">Academic Progress</th>
          <th className="border">Details</th>
          <th className="border">Student Id</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map(student=><tr key={student._id}>
            <td className="border">{student.name}</td>
            <td className="border">{student.department}</td>
            <td className="border">{student.skill}</td>
            <td className="border">{student.academic}</td>
            <td className="border">{student.details}</td>
            <td className="border">{student.id}</td>
        <td>
        <Link to={`/update/${student._id}`}><button  className='bg-green-500 m-2 p-2 rounded-md'>Edit</button></Link>
              <button onClick={()=>handleDelete(student._id)} className='bg-red-500 m-2 p-2 rounded-md'>Delete</button>
        </td>
          </tr>)
             
        }
        {/* Add more rows as needed */}
      </tbody>
    </table>
    </>
  )
}

export default App
