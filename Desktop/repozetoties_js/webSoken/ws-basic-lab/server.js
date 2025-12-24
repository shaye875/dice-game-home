import { WebSocketServer } from "ws"

const PORT = 8080

const wss = new WebSocketServer({ port: PORT })

console.log(`ws://localhost:${PORT}`)

function broadcast(obj) {
    const data = JSON.stringify(obj)
    for (const client of wss.clients) {
        if (client.readyState === client.OPEN) {
            client.send(data)
        }
    }
}

wss.on("connection", (ws) => {
    ws.send(JSON.stringify({ type: "system", text: "send join first" }))
    ws.on("message", (raw) => {
        const str = raw.toString()
        let msg;
        try {
            msg = JSON.parse(str)
        } catch {
            ws.send(JSON.stringify({ type: "system", text: "bad json" }))
            return
        }
        if (!msg.type) {
            ws.send(JSON.stringify({ type: "system", text: "missing type" }))
            return
        }
        if (msg.type === "join") {
            if (typeof msg.name !== "string" || msg.name.trim() === "") {
                ws.send(JSON.stringify({ type: "system", text: "join invalid" }))
                return
            }
        }
        ws.name = msg.name.trim();
        broadcast({ type: "system", text: `${ws.name} joined` })
        return
    })
})


      
