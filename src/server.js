import "dotenv/config";
import app from "./app.js";

app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

app.listen (process.env.PORT, () => {  
    console.log("Server up and running");

});

