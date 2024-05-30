import app from "./app.js";
import db from "./src/database/db.js";
/**@description set false when the you need not to erase the data on db */
db.db.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("app listen on port 3000");
    });
  })
  .catch(console.log);
