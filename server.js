let express = require('express');

let app = express();

let PORT = 2222;

app.listen(PORT, () => {
    console.log('Server is running on PORT: '+PORT);
})

app.get('/', (req, res) => {
    res.status(200).sendfile('index.html');
})