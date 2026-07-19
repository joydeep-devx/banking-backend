require("dotenv").config();
const app = require("./src/app.js");
const connectToDB = require("./src/config/db.js");


connectToDB();

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
});