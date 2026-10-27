function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-4">
        <div className="container">
            <div className="row">

                <div className="col-md-6 text-center mt-3">
                    <h4>Links</h4>
                    <p>Home</p>
                    <p>Computer Science</p>
                    <p>Courses</p>
                    <p>Reports</p>
                </div>

                <div className="col-md-6 text-center mt-3">
                    <h4>Contact Info</h4>
                    <p>Contact Us</p>
                    <p>0312-1425367</p>
                    <p>assignment@gmail.com</p>
                </div>
            </div>

                <hr className="border-secondary"/>
                <p className="text-center text-white mb-0">
                    2024 Student Portal All Rights Reserved
                </p>

        </div>

    </footer>
  );
}

export default Footer;