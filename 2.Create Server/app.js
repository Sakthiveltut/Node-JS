const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{

    const url = req.url
    if(url==="/"){
        res.setHeader("content-type","text/html")
        res.write("<html>")
        res.write("<head><title>Create Server</title></head>")
        res.write("<body><form action='/message' method='POST'><label>Enter a value:<input type='text'></label><button>click</button></form></body")
        res.write("</html>")
        return res.end()
    }

    if(url==="/message" && req.method==='POST'){
        fs.writeFileSync("hello.txt","hello")
        res.setHeader("Location","/")
        res.statusCode = 302
        return res.end()
    }

    //Request:
    //console.log(req.url)
    //console.log(req.method)
    // console.log(req.headers)
    //process.exit()

    //Response:
    res.setHeader("content-type","text/html")
    res.write("<html>")
    res.write("<head><title>Create Server</title></head>")
    res.write("<body><h1>Welcome to node js programming</h1></body")
    res.write("</html>")
    res.end()

})
server.listen(3000)