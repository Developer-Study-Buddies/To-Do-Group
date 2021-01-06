const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Added http://localhost: for our convenience
const server = app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));