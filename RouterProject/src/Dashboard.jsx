import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // For icons

function Dashboard() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h3 className="text-center">Dashboard</h3>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <a className="nav-link text-white" href="/">
              <i className="bi bi-house-fill"></i> Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="bi bi-person-fill"></i> Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/recipes">
              <i className="bi bi-bar-chart-fill"></i> All Recipes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="bi bi-gear-fill"></i> Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light">
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
          <a className="navbar-brand" href="#">
            <i className="bi bi-grid-fill"></i> My Dashboard
          </a>
          <div className="ms-auto">
            <button className="btn btn-outline-primary me-2">
              Notifications
            </button>
            <button className="btn btn-primary">Log Out</button>
          </div>
        </nav>

        {/* Content Area */}
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Users</h5>
                  <p className="card-text">Manage your users effectively.</p>
                  <button className="btn btn-primary">View Users</button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Sales</h5>
                  <p className="card-text">Track your sales data.</p>
                  <button className="btn btn-primary">View Sales</button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Reports</h5>
                  <p className="card-text">Generate detailed reports.</p>
                  <button className="btn btn-primary">View Reports</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Overview</h5>
                  <p className="card-text">
                    This is the overview section where you can add summary
                    information or charts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
