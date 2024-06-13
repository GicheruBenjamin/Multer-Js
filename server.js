
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => 
    res.send('I am a king in express')
)

// Require the upload middleware
const upload = require('./upload');

// Set up a route for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file
  res.json({ message: 'File uploaded successfully!' });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



