const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(auth);
app.use(router);
app.listen(process.env.PORT);
