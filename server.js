import express from "express";
import cors from "cors";
import todoRouter from "./router/todo.js"; // 

const app = express();

app.use(cors());
app.use(express.json()); // 

app.use("/api/todos", todoRouter); // 

// globale Fehlerbehandlung
app.use((err, req, res, next) => {
    console.error("ERROR")
    res.status(500).json({message: "Something went wrong"})
})

// Default Route
app.use((req,res) => {
    res.status(404).send("Die Seite die du suchst existiert nicht");
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

