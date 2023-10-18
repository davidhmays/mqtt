// To build: npm run build. How do we tutn off the npm build debugger?
// How to add type definitions? Here somewhere: 
// To use client side directly, would need some kind of 
// Notice the URL starts with ws:// for web socket, not mqtt:// or http://
// If connecting to HiveMQ's test server, find a client ID here: https://www.hivemq.com/demos/websocket-client/
// Can see overall here: https://www.mqtt-dashboard.com/

console.log(mqtt);
const url = "ws://broker.hivemq.com:8000/mqtt";
const client = mqtt.connect(url, {
    clientId: "clientId-54t4sP6pzs"
});

const generate_user = () =>
{
    var a = ["Impatient", "Blue", "Ugly", "Friendly", "Sunny", "Quick", "Intelligent", "Curious", "Elegant", "Delightful", "Playful", "Vibrant", "Clever", "Lively", "Cozy", "Radiant", "Sparkling", "Adventurous", "Mysterious", "Peaceful"]
    var b = ["Banana", "Penguin", "Rock", "Pickle", "Noodle", "Giraffe", "Squirrel", "Sock", "Llama", "Wombat", "Pancake", "Unicorn", "Pajamas", "Gummy Bear", "Taco", "Tire", "Lobster", "Pineapple", "Kangaroo", "Beluga"];
    var rA = Math.floor(Math.random() * a.length);
    var rB = Math.floor(Math.random() * b.length);
    return a[rA] + b[rB];
}
const user = generate_user();

const refresh_user = () => document.querySelector("#current_user").innerHTML = user
const toggle_form = () =>
{
    if (connect_form.hasAttribute("hidden"))
    {
        connect_form.removeAttribute("hidden");
    }
}


refresh_user()


client.on("connect", () =>
{
    //Post username to 
    client.publish("participants", user)
    client.subscribe("participants");
    client.publish("participants", user)
});





client.on("message", (topic, message) =>
{
    // message is Buffer
    console.log(message.toString());
    client.end();
});



