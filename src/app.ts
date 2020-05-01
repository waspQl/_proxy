import Express = require('express')

// 引数が渡ってきた場合はそれをport番号として使う
let port = 3000
if (
  process.argv[2]
  && Number.isInteger(
    parseInt(process.argv[2])
  )
) port = parseInt(process.argv[2])

const app = Express();

// GET method routeを設定
app.get('/', (req, res) => {
  res.send('GET is sended.')
});
// POSt method routeを設定
app.post('/', (req, res) => {
  res.send('POST is sended.')
});

// Starts the HTTP server listening for connections
app.listen(port, () => {
  console.log('server is up')
});

