import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import axios from "axios";

function Home() {
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    address: "",
    qualification: "",
    password: ""
  });

  useEffect(() => {
    setFormData(userData || {});
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/students/${email}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/students/${email}`, formData);
      alert("Profile updated successfully!");

      // Display email notification status (if needed)
      console.log("Email notification status:", response.data);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="containerz">
      <form className="profile-form">
        <h1>Enter email address to display your info.</h1>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button type="button" onClick={fetchUserData}>
            Fetch User Data
          </button>
        </div>

        {userData && (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Surname</label>
              <input
                type="text"
                id="lastname"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="qualification">Qualifications</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="button" onClick={handleUpdate}>
                Update Profile
              </button>
            </div>
          </div>
        )}

      </form>
    </div>
  );
}

export default Home;
