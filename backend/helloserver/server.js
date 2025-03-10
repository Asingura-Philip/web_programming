const express = require("express");
const app = express();
const db = require("./config");

const port = 3000;

app.use(express.json());

const sql = `CREATE TABLE IF NOT EXISTS users(
            id int AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(15),
            email VARCHAR(20)
)`;

db.query(sql, (err, result) => {
  if (err) throw err;
  console.log("table created");
});
app.get("/hello", (req, res) => {
  res.send("hello world");
});

// function requestLogger(req,res,next){
//     console.log(`request method: ${req.method},URL: ${req.url}`)
//     next();
// }

app.post('/add-user',(req,res)=>{
    const {name,email} = req.body
    const sql = `INSERT INTO users(name,email) VALUES(?,?)`

    db.query(sql,[name,email],(error,result)=>{
        if(error) throw error;
        res.send("user is added successfully");
    })
})

app.get("*", (req, res) => {
  res.send("this route does not exist");
});

app.listen(port, () => {
  console.log(`the server is running on ${port}`);
});
