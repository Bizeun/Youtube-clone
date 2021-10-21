import express from "express";

const PORT = 5050;

const app = express();

const handleListening = () => console.log (`Server on port http://localhost:${PORT}`);

app.listen(5050, handleListening);