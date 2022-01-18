const StaticServer = require('static-server')

let server = new StaticServer({
 
    port:8000,
    rootPath : './DIST/'
})

server.start(() => {console.log(`server started at ${server.port}`)})