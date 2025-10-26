import express from "express";
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

console.log(import.meta.url);

app.use(express.static(path.join(__dirname, "../frontend")));

const messages = [  
    "Hello from the server!",
  "Today is your lucky day!",
  "Keep coding, you genius!",
  "Async/await is awesome!",
  "Fetch me if you can 😎"]

app.get("/api/test", (req, res) => {
    const hour = new Date().getHours();
    let greeting = "hello!";
    if(hour < 12) greeting = "Good morning!"
    else if(hour < 18) greeting = "good afternoon!"
    else greeting = "good evening!"
    const rdIdx = Math.floor(Math.random() * messages.length);
    res.json({ message: messages[rdIdx],
        time: greeting
     });
})

app.get("/api/greetings", (req, res)=>{
    res.json({message: "Surprise motherfucker"});
})

app.get("/api/time", (req, res)=>{
    const hour = new Date().getHours();
    if(hour < 12) res.json({message: "good morning"});
    else if(hour < 18 ) res.json({message: `good afternoon it's ${hour} pm`});
    else res.json({message: "good evening"});
})

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