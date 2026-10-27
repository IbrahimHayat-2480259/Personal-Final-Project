import { Link } from "react-router-dom";
import { useState } from "react";

function StudentCard({name, id, major, year, gpa}) {
  const [views, setViews] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  function handleView() {
  setViews(views + 1);
}

  return (
    <div className="card h-100">
        <div className="bg-secondary text-white text-center py-4 fs-1" >👤</div>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="mb-1">ID: {id}</p>
            <p className="mb-1">Major: {major}</p>
            

            {showDetails && (
              <>
                <p className="mb-1">Year: {year}</p>
                <p className="mb-1">GPA: {gpa}</p>
              </>
            )}

            <p className="text-danger small">Profile Views: {views}</p>

            <div>
              <button onClick={handleView}>View Profile</button>
              <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
            </div>

            <div className="mt-3">
               <Link to={`/student/${id}`} className="btn btn-outline-primary w-100">
                  Open Student Profile
                </Link>
            </div>
        </div> 
    </div>
  )
}

export default StudentCard;
