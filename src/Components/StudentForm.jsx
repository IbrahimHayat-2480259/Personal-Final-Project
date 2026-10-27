import React from 'react';
import { useForm } from 'react-hook-form';

function StudentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    alert("Student registered successfully!");
  };
  
  return (
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-body p-4">
        <h1 className="mb-4 fw-bold">Student Registration</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter Your Full Name" {...register("name", {required: "Name Is Required"})} />
            {errors.name && <p className="text-danger small">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter Your Email" {...register("email", {required: "Email Is Required", pattern: /^\S+@\S+$/i})} />
            {errors.email && <p className="text-danger small">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="text" className="form-control" placeholder="Enter Your Number" {...register("phone", {required: "Phone Is Required"})} />
            {errors.phone && <p className="text-danger small">{errors.phone.message}</p>}
          </div>

          {/* Program */}
          <div className="mb-3">
            <label className="form-label">Program</label>
            <select className="form-select" {...register("program", { required: "Program Is Required" })}>
              <option value="">Select Program</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Information Technology">Information Technology</option>
            </select>
            {errors.program && <p className="text-danger small">{errors.program.message}</p>}
          </div>

          {/* Semester */}
          <div className="mb-3">
            <label className="form-label">Semester</label>
            <select className="form-select" {...register("semester", { required: "Semester Is Required" })}>
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
            {errors.semester && <p className="text-danger small">{errors.semester.message}</p>}
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label d-block">Gender</label>
            <select className="form-select" {...register("gender", { required: "Gender Is Required" })}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="text-danger small">{errors.gender.message}</p>}
          </div>
         
          {/* Address */}
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea className="form-control" rows="3" placeholder="Enter Your Address" {...register("address", {required: "Address Is Required"})}></textarea>
            {errors.address && <p className="text-danger small">{errors.address.message}</p>}
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Register Student
          </button>

        </form>
      </div>
    </div>
  );
}

export default StudentForm;