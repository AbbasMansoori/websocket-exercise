const WebSocket = require('ws')
const wsServer = new WebSocket.Server({port: 9000})

let IDcounter = 1
const clients = []

wsServer.on("connection", function(ws){
    console.log("connection established")
    ws.send("heyy from server")

    const client = {

        socket: ws,
        id: IDcounter,
        username: `User${IDcounter}`
        
    }
    console.log(client.username)
    
    IDcounter++;
    clients.push(client)
    
    clients.forEach(client=>{
        const message = "client message"
        client.socket.send(message)
    })

    ws.on('message', function(data){
        const payload = JSON.parse(data)
        switch(payload.type){
            case "SET_USERNAME":
                console.log(`${client.username} sent ${ payload.data}`)
                break
        }

        
        // console.log("Recieved: ", data)
      })

      ws.on('close', function(closeCode){
        console.log("Client disconnected...")
      })

      // övning 2
    
    //   ws.on("connection", function(ws){

       
        
    // })
    
    
    
})