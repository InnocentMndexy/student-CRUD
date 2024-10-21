// import React, { useState } from "react";
// import "../Signup/Signup.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// function Signup() {
//   const [title, setTitle] = useState("");
//   const [name, setFirstName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [qualification, setQualifications] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3001/signup', {
//       title,
//       name,
//       surname,
//       address,
//       email,
//       qualification,
//       password,
//       confirmPassword,
//     })
//     .then(result => {
//       console.log(result.data);
//       alert("Profile created successfully!");
//       navigate('/');
//     })
//     .catch(err => console.error(err));
//   }

//   return (
//     <div className="containera">
//       <h1 className="form-title">Register</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="main-user-info">
//         <div className="user-input-box">
//           <label htmlFor="title">Title</label>
//           <select
//             id="title"
//             name="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           >
//             <option value="mr">Mr.</option>
//             <option value="ms">Ms.</option>
//             <option value="mrs">Mrs.</option>
//             <option value="miss">Miss</option>
//             <option value="dr">Dr.</option>
//             <option value="prof">Prof.</option>
//           </select>
//         </div>
//         <div className="user-input-box">
//           <label htmlFor="name">First Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="user-input-box">
//           <label htmlFor="surname">Surname</label>
//           <input
//             type="text"
//             id="surname"
//             name="surname"
//             value={surname}
//             onChange={(e) => setSurname(e.target.value)}
//             required
//           />
//         </div>

//         <div className="user-input-box">
//           <label htmlFor="address">Address Details</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//         </div>

        // <div className="user-input-box">
        //   <label htmlFor="email">Email</label>
        //   <input
        //     type="email"
        //     id="email"
        //     name="email"
        //     value={email}
        //     onChange={(e) => setEmail(e.target.value)}
        //     required
        //   />
        // </div>

//         <div className="user-input-box">
//           <label htmlFor="qualification">Qualification</label>
//           <select
//             id="qualification"
//             name="qualification"
//             value={qualification}
//             onChange={(e) => setQualifications(e.target.value)}
//           >
//             <option value="Diploma">Diploma.</option>
//             <option value="Bachelor Diploma">Bachelor Diploma.</option>
//             <option value="Honours degree">Honours degree.</option>
//             <option value="Master's degree">Master's degree.</option>
//           </select>
//         </div>

//         <div className="user-input-box">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <div className="user-input-box">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-submit-btn">
//           <input type="submit" value="Register"/>
//         </div>

//         <br/>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
        
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from "react";
import "../Signup/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [title, setTitle] = useState("");
  const [name, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualifications] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/signup', {
      title,
      name,
      surname,
      address,
      email,
      qualification,
      password,
      confirmPassword,
    })
    .then(result => {
      console.log(result.data);
      alert("Profile created successfully!");
      navigate('/');
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="containera">
      <h1 className="form-title">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="main-user-info">
          <div className="user-input-box">
            <label htmlFor="title">Title</label>
            <select
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option value="mr">Mr.</option>
              <option value="ms">Ms.</option>
              <option value="mrs">Mrs.</option>
              <option value="miss">Miss</option>
              <option value="dr">Dr.</option>
              <option value="prof">Prof.</option>
            </select>
          </div>
          <div className="user-input-box">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>

          <div className="user-input-box">
            <label htmlFor="address">Address Details</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="user-input-box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

          

          <div className="user-input-box">
            <label htmlFor="qualification">Qualification</label>
            <select
              id="qualification"
              name="qualification"
              value={qualification}
              onChange={(e) => setQualifications(e.target.value)}
            >
              <option value="Diploma">Diploma.</option>
              <option value="Bachelor Diploma">Bachelor Diploma.</option>
              <option value="Honours degree">Honours degree.</option>
              <option value="Master's degree">Master's degree.</option>
            </select>
          </div>

          <div className="user-input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="user-input-box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-submit-btn">
            <input type="submit" value="Register"/>
          </div>

          <br/>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
