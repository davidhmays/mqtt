// To build: npm run build. How do we tutn off the npm build debugger?
// How to add type definitions? Here somewhere: 
// To use client side directly, would need some kind of 
// Notice the URL starts with ws:// for web socket, not mqtt:// or http://

// If connecting to HiveMQ's test server, find a client ID here: https://www.hivemq.com/demos/websocket-client/
// Can see overall here: https://www.mqtt-dashboard.com/

console.log(mqtt);

const url = "ws://broker.hivemq.com:8000/mqtt"
const client = mqtt.connect(url, {
    clientId: "clientId-54t4sP6pzs"
});
client.on("connect", () =>
{
    client.subscribe("presence2", (err) =>
    {
        if (!err)
        {
            client.publish("presence2", "Hello mqtt");
        }
    });
});


client.on("message", (topic, message) =>
{
    // message is Buffer
    console.log(message.toString());
    client.end();
});
