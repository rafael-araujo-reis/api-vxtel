const app = require('../src/app');
let cors = require('cors');
const port = normalizaPort(process.env.PORT || '3333');

function normalizaPort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }

  return false;
}

app.use(cors());

app.listen(port, () => {
  console.log(`api-vxtel listening on port ${port}: http://localhost:${port}`);
});