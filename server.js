const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000; 

app.get('/', (req, res) => {
    res.send('Hello!');
});

// Middleware 
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})