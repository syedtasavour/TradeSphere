import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = inputValue;

    // Basic validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { position: "bottom-left" });
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long", {
        position: "bottom-left",
      });
      return;
    }

    try {
      // Call your backend signup API
      const response = await fetch("http://localhost:3002/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        setInputValue({ name: "", email: "", password: "", confirmPassword: "" });
        setTimeout(() => navigate("/login"), 1500); // Redirect to login
      } else {
        toast.error(data.message, { position: "bottom-left" });
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.", { position: "bottom-left" });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Create an Account</h3>
              <form onSubmit={handleSubmit}>
                {/* Full Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inputValue.name}
                    onChange={handleOnChange}
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email Address Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputValue.email}
                    onChange={handleOnChange}
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={inputValue.password}
                    onChange={handleOnChange}
                    className="form-control"
                    id="password"
                    placeholder="Create a password"
                    required
                  />
                </div>

                {/* Confirm Password Field */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={inputValue.confirmPassword}
                    onChange={handleOnChange}
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Re-enter your password"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
