import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../LandingPage.css";
import axios from "axios";

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          setError("You must be logged in to view this data.");
          return;
        }

        // Make the request with the token in the Authorization header
        const response = await axios.get(
          "http://localhost:5000/api/protected",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(response.data.all); // Set the users array from the API response
      } catch (err) {
        // Handle errors (e.g., token missing, invalid, or server error)
        setError(err.response?.data?.message || "Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="landing-container">
      <div className="background-grid"></div>
      <div className="radial-gradient"></div>

      <div className="landing-content">
        <h1 className="landing-title">Welcome to AuthApp</h1>
        <p className="landing-subtitle">
          Secure authentication made simple. Join our platform and start your
          journey.
        </p>

        <div className="cta-buttons">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Sign Up
          </Link>
        </div>

        <div className="landing-description">
          <p>
            Secure authentication with modern web technologies. Protect your
            account with our robust security measures.
          </p>
        </div>

        <div className="users-section ">
          <h2>All Registered Users</h2>
          {error ? (
            <p className="error-message">{error}</p>
          ) : users.length > 0 ? (
            <ul className="users-list">
              {users.map((user, index) => (
                <li key={index}>
                  <strong>{user.fullName}</strong> ({user.email})
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found or loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
