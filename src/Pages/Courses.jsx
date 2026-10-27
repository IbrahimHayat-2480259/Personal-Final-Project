function Courses() {
  return (
    <div className="mt-5">
      <h2>Available Courses</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <h4>Computer Science</h4>
            <p>Learn programming, algorithms, and software development.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <h4>Software Engineering</h4>
            <p>Focus on building larges cale applications and systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;