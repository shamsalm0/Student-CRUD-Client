import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const Update = () => {
    const loadedStudent=useLoaderData()
    const{_id,id,name,department,skill,academic,details,photo}=loadedStudent
    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const id=form.id.value;
        const department=form.department.value;
        const skill=form.skill.value;
        const academic=form.academic.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const UpdatedStudentData={id,name,department,skill,academic,details,photo};
        
        fetch(`http://localhost:2000/student/${_id}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(UpdatedStudentData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Do you want to save the changes?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire('Saved!', '', 'success')
                    } else if (result.isDenied) {
                      Swal.fire('Changes are not saved', '', 'info')
                    }
                  })
             form.reset();
            }
            console.log(data);
        })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
        <h2 className='font-extrabold text-xl font-serif text-center'>Add New Student</h2>
        <form onSubmit={handleSubmit}>
<div className='md:flex mb-8'>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text font-serif">Student Name</span>
</label>
<label className="input-group">

<input type="text" name='name' placeholder="Student Name" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2 ml-4">
<label className="label">
<span className="label-text font-serif">Student Id</span>
</label>
<label className="input-group">

<input type="text" name='id' placeholder="Student Id" className="input input-bordered w-full" />
</label>
</div>
</div>


<div className='md:flex mb-8'>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text font-serif">Department</span>
</label>
<label className="input-group">

<input type="text" name='department' placeholder="Enter Student Department" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2 ml-4">
<label className="label">
<span className="label-text font-serif">Skill</span>
</label>
<label className="input-group">

<input type="text" name='skill' placeholder="Enter Student Skill" className="input input-bordered w-full" />
</label>
</div>
</div>


<div className='md:flex mb-8'>
<div className="form-control md:w-1/2">
<label className="label">
<span className="label-text font-serif">Academic Progress</span>
</label>
<label className="input-group">

<input type="text" name='academic' placeholder="Enter Student Academic Progress" className="input input-bordered w-full" />
</label>
</div>
<div className="form-control md:w-1/2 ml-4">
<label className="label">
<span className="label-text font-serif">Details</span>
</label>
<label className="input-group">

<input type="text" name='details' placeholder="Student Details" className="input input-bordered w-full" />
</label>
</div>
</div>

<div className='w-full mb-8'>
<div className="form-control w-full">
<label className="label">
<span className="label-text font-serif">Photo URL</span>
</label>
<label className="input-group">

<input type="text" name='photo' placeholder="Enter your Photo URL" className="input text-center input-bordered w-full" />
</label>
</div>

</div>

<input type="submit" value="Update" className='btn btn-block text-[#331A15] bg-[#73c985]'/>
        </form>
    </div>
    );
};

export default Update;