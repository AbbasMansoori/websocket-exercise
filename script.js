let websocket = null
const inputMessage = document.getElementById("inputMessage")
const inputName = document.getElementById("inputName")
const p = document.querySelector("p")


function connect(){
    websocket = new WebSocket("ws://localhost:9000")

    websocket.addEventListener("open", function(){
        console.log("connected from client")
        websocket.send(JSON.stringify({name: inputName.value, type: "SET_USERNAME"}))
    })

    websocket.addEventListener("message", function(event){
        // console.log(event.data)
        // console.log(input.value.toUpperCase())
        // p.innerHTML = input.value.toUpperCase()

        
    })
    websocket.addEventListener("close", function(){
        console.log("Disconnected")
        websocket = null
    })

}

function sendMessage(){
    if(websocket){
        // websocket.send(input.value)
        
        const payload = { 
            type: "SET_USERNAME",
            data: inputMessage.value,
           
            
        }
        
        websocket.send( JSON.stringify(payload))

    }
}


