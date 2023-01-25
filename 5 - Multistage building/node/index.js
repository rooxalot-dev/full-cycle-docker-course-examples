const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks - Node inside a Container</h1>');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));