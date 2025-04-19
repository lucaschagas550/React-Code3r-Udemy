const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://mongo:mongo@localhost:27017/Todo?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.once("open", () => {
  console.log("Conectado ao banco:", mongoose.connection.name);
});
