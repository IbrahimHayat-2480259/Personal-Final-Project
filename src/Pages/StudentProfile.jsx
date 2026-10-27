import { useParams, Link } from "react-router-dom";

function StudentProfile() {
     const { id } = useParams(); 
    return (
        <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body">
        
          <h2>Student Profile</h2>
          <hr />
          <p><strong>Student ID:</strong> {id}</p>
           <p><strong>Name:</strong> Jafar</p>
          <p><strong>Major:</strong> CS</p>
          <p><strong>Year:</strong> 3</p>
          <p><strong>GPA:</strong> 3.8</p>

          <Link to="/students" className="btn btn-secondary mt-3">
            Back to Directory
          </Link>

        </div>
      </div>
    </div>
    )
}

export default StudentProfile;