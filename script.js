let websocket = null
const input = document.querySelector("input")
const p = document.querySelector("p")


function connect(){
    websocket = new WebSocket("ws://localhost:9000")

    websocket.addEventListener("open", function(){
        console.log("connected from client")
    })

    websocket.addEventListener("message", function(event){
        // console.log(event.data)
        // console.log(input.value.toUpperCase())
        // p.innerHTML = input.value.toUpperCase()

        
        const payload = { 
            type: "SET_USERNAME",
            data: input.value
        }
        websocket.send( JSON.stringify(payload.data))
    })
    websocket.addEventListener("close", function(){
        console.log("Disconnected")
        websocket = null
      })

}

function sendMessage(){
    if(websocket){
      websocket.send(input.value)
   

    }
}

