//TO build: npm run build. How do we tutn off the npm build debugger?
// How do I add type definitions?
console.log(mqtt)


const client = mqtt.connect("mqtt://test.mosquitto.org");

client.on("connect", () =>
{
    client.subscribe("presence", (err) =>
    {
        if (!err)
        {
            client.publish("presence", "Hello mqtt");
        }
    });
});

client.on("message", (topic, message) =>
{
    // message is Buffer
    console.log(message.toString());
    client.end();
});