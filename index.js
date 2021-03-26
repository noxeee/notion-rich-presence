const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Editing a Notion page",
        state: "✍️",
        startTimestamp: new Date(),
        largeImageKey: "notion-large",
        largeImageText: "Notion"
    });
    console.log("Notion rich presence is running");
});

rpc.login({
    clientId: "824933561995231272"
});

