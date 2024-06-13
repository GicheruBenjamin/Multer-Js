
const express = require('express')
const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
  app.use("/public", express.static(__dirname + "/public"));

// Require the upload middleware
const upload = require('./upload');

// Set up a route for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file
  res.json({ message: 'File uploaded successfully!' });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



