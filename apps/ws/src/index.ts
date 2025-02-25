import { WebSocketServer } from "ws";
import { client } from "db/client";
const wss = new WebSocketServer({ port:8081 });

wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
        await client.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString(),
            },
        });
        ws.send(message);
    });
});


