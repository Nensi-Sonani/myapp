const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json'); // your database
const middlewares = jsonServer.defaults();

app.db = router.db;

app.use(cors());
app.use(middlewares);

// Bind the router db to the app
app.use(auth);
app.use(router);

app.listen(5000, () => {
  console.log('JSON Server is running with auth');
});
