import express from "express";
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

console.log(import.meta.url);

app.use(express.static(path.join(__dirname, "../frontend")));


app.get("/", (req, res) => {
    res.json({ message: "hello from the goddamn backend" })    
})

app.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname, "../frontend", "about.html"))
})

app.get("/contact", (req, res)=>{
    res.sendFile(path.join(__dirname, "../frontend", "contact.html"))
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost: ${PORT}`)
})