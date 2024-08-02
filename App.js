// // import the math module
// const math = require('./math');


// // use the add function from the math module
// let sum = math.add(1,2);
// console.log(sum);

// // // use the subtract function from the math module
// // let difference = math.subtract(1,2);
// // console.log(difference);

// // // use the multiply function from the math module
// // let product = math.multiply(1,2);
// // console.log(product);

// // // use the divide function from the math module
// // let quotient = math.divide(1,2);
// // console.log(quotient);

// const fs = require('fs');

// // const file = fs.readFile('example.txt', 'utf-8', (err, data) => {
//     fs.readFile('node.txt', 'utf-8', (err, data) => {

//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// // module.exports = {fs};


// // App.js
// const math = require('./math');
// const fs = require('fs');

// // Use the add function from the math module
// let sum = math.add(1, 2);
// console.log(sum);

// // Use the subtract function from the math module
// let difference = math.subtract(1, 2);
// console.log(difference);

// // Use the multiply function from the math module
// let product = math.multiply(1, 2);
// console.log(product);

// // Use the divide function from the math module
// let quotient = math.divide(1, 2);
// console.log(quotient);

// // CRUD operations

// // Create and write to a file
// const createFile = (filename, content) => {
//     fs.writeFile(filename, content, (err) => {
//         if (err) {
//             console.error('Error creating file:', err);
//             return;
//         }
//         console.log(`File ${filename} created successfully.`);
//     });
// };

// // Read from a file
// const readFile = (filename) => {
//     fs.readFile(filename, 'utf-8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return;
//         }
//         console.log(`Content of ${filename}:`);
//         console.log(data);
//     });
// };

// // Update a file (append content)
// const updateFile = (filename, content) => {
//     fs.appendFile(filename, content, (err) => {
//         if (err) {
//             console.error('Error updating file:', err);
//             return;
//         }
//         console.log(`File ${filename} updated successfully.`);
//     });
// };

// // Delete a file
// const deleteFile = (filename) => {
//     fs.unlink(filename, (err) => {
//         if (err) {
//             console.error('Error deleting file:', err);
//             return;
//         }
//         console.log(`File ${filename} deleted successfully.`);
//     });
// };

// const filename = 'data.txt';

// createFile(filename, 'This is the initial content.\n');

// readFile(filename);

// updateFile(filename, 'This is the appended content.\n');

// setTimeout(() => readFile(filename), 1000);

// setTimeout(() => deleteFile(filename), 2000);


// import the http module
// const http = require('http');
// const server = http.createServer((req, res) => {
//     // res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.writeHead(200,{'Content-Type': 'text/html'});

//     // res.end('Hello World!');
//     res.end();
// }
// );
// server.listen(3000, () => {
//     console.log('Server is running');
// });

// const express = require('express');
// const app = express(); 
// const port = 8080;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' }
// ]

// app.get('/users', (req, res) => {
//     res.json(users);
// })

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const id_ = parseInt(id);
//     const user = users.find(user=>user.id===id_);
//     if(user){
//         res.json(user);
//     }else{
//         res.status(404).send('User not found');
//     }
// })
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// database connection

// const express = require('express');
// const connectDB = require('./src/config/db');
// const app = express(); 
// const port = 3000;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/healme')
// .then(() => console.log('Connected to MongoDB...'));

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


const express = require('express');
require("dotenv").config();
const connectDB = require('./src/config/db');
const userProfileRoutes = require('./src/Routers/userProfileRoutes');
// const userProfileRoutes = require('./src/Routers/userProfileRoutes');
const { userProfile } = require('./src/controllers/userProfileController');
const profileRoutes = require("./src/Routers/ProfileRoutes");

const authRoutes = require("./src/Routers/authRoute");
const categoryRoutes = require('./src/Routers/categoryRoutes');
const productRoutes = require('./src/Routers/productRoutes');
const app = express(); 
const port = 5000;
// const port =process.env.port;

connectDB();

app.use(express.json());
app.use('/user',userProfileRoutes);
app.use('/api/auth', authRoutes);

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use('/api/profile', profileRoutes);

app.use('/api', categoryRoutes)
app.use('/api', productRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const express = require("express");
// const connectDB = require("./src/config/db");
// const userProfileRoutes = require("./src/Routers/userProfileRoutes");
// const authRoutes = require ("./src/Routers/authRoute");
// // const { userProfile } = require('./src/controllers/userProfileController');
// const profileRoutes = require("./src/Routers/ProfileRoutes");
// const app = express();
// const port = 5000;
// connectDB();
// app.use(express.json());

// app.use("/user", userProfileRoutes);
// app.use('/api/auth', authRoutes);

// app.use('/api/profile', profileRoutes);

// app.listen(port, () => {
//   console.log('Server is running on port ${port}');
// });