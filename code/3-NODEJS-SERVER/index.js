const http = require("http")

const HOST = "localhost"
const PORT = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end("Hello Server")
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST, err => {
  if (err) {
    return console.log("Something bad happened", err)
  }

  console.log(`Server is listening on ${HOST}:${PORT}`)
})
