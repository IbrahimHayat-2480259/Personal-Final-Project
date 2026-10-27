import { Link } from "react-router-dom";

function Navbar(){
  return (
    <nav className="navbar navbar-dark navbar-expand bg-dark px-4">
      <Link className="navbar-brand" to="/">Student Portal</Link>
      <ul className="navbar-nav me-auto text-white">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/students">Students</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/reports">Reports</Link></li>
      </ul>
      <span className="text-white me-3">Settings</span>
      <input className="form-control me-2 search-input " style={{width: "200px"}} placeholder="Search" />
      <button className="btn btn-primary">Search</button>


    </nav>
  );
}

export default Navbar;