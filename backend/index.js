const http =  require('http')

const server = http.createServer((req, res)=>{
    if(req.url == "/about"){
        res.end("this page is about to end")
    }
    if(req.url=='/profile'){
        res.end("this is the profile page")
    }
})

server.listen(3000)
