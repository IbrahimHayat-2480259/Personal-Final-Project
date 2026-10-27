function Breadcrumb() {
  return (
    <nav>
      <ol className="breadcrumb bg-white p-2 rounded">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">Students</li>
        <li className="breadcrumb-item active">Directory</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;