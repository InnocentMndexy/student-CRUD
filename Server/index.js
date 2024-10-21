// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const StudentModel = require('./student');
// const nodemailer = require('nodemailer');

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/student")


// // Nodemailer configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password'
//   }
// });

// //Get (Fetch) user data by email:
// app.get("/students/:email", (req, res) => {
//   const email = req.params.email;
//   StudentModel.findOne({ email: email })
//     .then((user) => {
//       if (user) {
//         res.json(user); 
//       } else {
//         res.status(404).json({ message: "User not found" });
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ message: "Internal Server Error" });
//     });
// });

// // PUT endpoint to update user data by email
// app.put("/students/:email", async (req, res) => {
//   const email = req.params.email;
//   const updatedData = req.body;

//   try {
//     const updatedUser = await StudentModel.findOneAndUpdate({ email: email }, updatedData, { new: true });
//     if (updatedUser) {
//       // Send email notification
//       const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: email,
//         subject: 'Profile Update Notification',
//         text: 'Your profile has been successfully updated.'
//       };

//       await transporter.sendMail(mailOptions);
//       console.log('Email notification sent successfully');

//       res.json(updatedUser); // Send updated user data as JSON response
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });



// //Login in
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   StudentModel.findOne({ email: email })
//     .then((user) => {
//       if (user) {
//         if (user.password === password) {
//           res.json("Success");
//         } else {
//           res.json("The password is incorrect");
//         }
//       } else {
//         res.json("No record exists");
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json("Internal Server Error");
//     });
// });



// //Registering
// app.post('/signup', (req, res) => {
//   const { title, name, surname, address, email, qualification, password } = req.body;

//   // Basic validation
//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and Password are required." });
//   }

//   // Check if the email already exists
//   StudentModel.findOne({ email: email })
//     .then(existingUser => {
//       if (existingUser) {
//         return res.status(400).json({ message: "Email already exists." });
//       }

//       // Create a new student document in MongoDB
//       return StudentModel.create({
//         title,
//         name,
//         surname,
//         address,
//         email,
//         qualification,
//         password
//       });
//     })
//     .then(newStudent => {
//       // Send email notification
//       const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: email,
//         subject: 'Registration Successful',
//         text: `Dear ${name},\n\nThank you for registering with us!\n\nBest regards,\nYour App Team`
//       };

//       return transporter.sendMail(mailOptions);
//     })
//     .then(info => {
//       console.log('Email sent: ' + info.response);
//       res.status(201).json({ message: "User registered successfully." });
//     })
//     .catch(error => {
//       console.error("Error registering user:", error);
//       res.status(500).json({ message: "Internal Server Error" });
//     });
// });



// app.listen(3001, () => {
//   console.log("Server is running");
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const StudentModel = require('./student');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/student", { useNewUrlParser: true, useUnifiedTopology: true });

// Get (Fetch) user data by email:
app.get("/students/:email", (req, res) => {
  const email = req.params.email;
  StudentModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json(user); 
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

// PUT endpoint to update user data by email
app.put("/students/:email", async (req, res) => {
  const email = req.params.email;
  const updatedData = req.body;

  try {
    const updatedUser = await StudentModel.findOneAndUpdate({ email: email }, updatedData, { new: true });
    if (updatedUser) {
      res.json(updatedUser); // Send updated user data as JSON response
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  StudentModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record exists");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Internal Server Error");
    });
});

// Registering
app.post('/signup', async (req, res) => {
  const { title, name, surname, address, email, qualification, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required." });
  }

  // Check if the email already exists
  try {
    const existingUser = await StudentModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // Create a new student document in MongoDB
    await StudentModel.create({
      title,
      name,
      surname,
      address,
      email,
      qualification,
      password
    });

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



