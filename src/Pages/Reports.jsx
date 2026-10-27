function Reports() {
  return (
    <div className="mt-5">
      <h2>Student Reports</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#101</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>#102</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Reports;