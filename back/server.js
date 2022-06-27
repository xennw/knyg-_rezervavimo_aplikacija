const mongoose = require("mongoose");
const app = require("./app");


const DB =
  "mongodb+srv://<username1>:<password7222>@cluster0.yoxew.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Prisijungta prie duomenu bazes!");
  });

const port = 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});