import React from 'react';

const TableStudents = ({student}) => {
    const {_id,name,department,skill,academic,details}=student
    return (
        <div>
            
        
          <td className="border">{name}</td>
          <td className="border">{department}</td>
          <td className="border">{skill}</td>
          <td className="border">{academic}</td>
          <td className="border">{details}</td>
          <td className="border">Data 6</td>
        
        {/* Add more rows as needed */}
      
        </div>
    );
};

export default TableStudents;