const fs = require("fs")

const requestHandler = (req,res) => {

    const url = req.url
    const method = req.method

    if(url==="/"){
        res.setHeader("content-type","text/html")
        res.write("<html>")
        res.write("<head><title>Create Server</title></head>")
        res.write("<body><form action='/message' method='POST'><label>Enter a value:<input type='text' name='msg'></label><button>click</button></form></body")
        res.write("</html>")
        return res.end() 
    }

    if(url==="/message" && method==='POST'){

        const body = []
        req.on('data',(chunk)=>{
            body.push(chunk)
            console.log(body);
        })
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split("=")
            fs.writeFile("hello.txt",message[0],(err)=>{
                res.setHeader("Location","/")
                res.statusCode = 302
                return res.end()
            })
        })

    }

    //Request:
    // console.log(req.url)
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

}
//module.exports = {handler:requestHandler,msg:"Welcome to node js programming"}

//module.exports.handler = requestHandler;
//module.exports.msg = "Welcome to node js programming";

exports.handler = requestHandler;
exports.msg = "Welcome to node js programming";