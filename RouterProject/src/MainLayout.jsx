import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function MainLayout() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Header Section */}
      <header className="bg-primary text-white py-3 px-4 shadow-sm d-flex justify-content-between align-items-center">
        <h1 className="m-0">My Application</h1>
        <nav>
          <Link to="/" className="text-white me-3">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
        </nav>
      </header>

      {/* Main Content Section */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar Navigation */}
        <aside className="bg-light border-end p-3" style={{ width: "250px" }}>
          <h5 className="text-center mb-4">Navigation</h5>
          <nav className="nav flex-column">
            <Link to="/login" className="nav-link text-dark">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </Link>
            <Link to="/registration" className="nav-link text-dark">
              <i className="bi bi-pencil-square"></i> Sign Up
            </Link>
            <Link to="/dashboard" className="nav-link text-dark">
              <i className="bi bi-speedometer2"></i> Dashboard
            </Link>
          </nav>
        </aside>

        {/* Main Display Area */}
        <main className="flex-grow-1 p-4 bg-light">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="card-title">Welcome to My Application</h2>
              <p className="card-text">
                Navigate through the links on the left to explore different
                sections of the app.
              </p>
            </div>
          </div>
          <Outlet />
        </main>
      </div>

      {/* Footer Section */}
      <footer className="bg-secondary text-white py-2 text-center">
        <div className="container">
          <small>
            &copy; 2024 My Application. All Rights Reserved. |{" "}
            <Link to="/privacy" className="text-white text-decoration-none">
              Privacy Policy
            </Link>
          </small>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
