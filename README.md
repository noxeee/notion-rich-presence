# Notion Rich Presence in Discord

This is going to create a rich presence in Discord for when you're editing your pages in Notion.

## Requirements
* npm
* node.js

## How to run it

Clone the repository.

### Manually
1. `npm install discord-rpc`
2. `node index.js`

### Running it with Notion on Windows
First do step one from [#Manually](Manually).

1. Edit the `start-rpc-with-notion.bat.example` file to your needs.
2. Save it as `start-rpc-with-notion.bat`.
3. Run the file `.\start-rpc-with-notion.bat` in CMD oder Powershell.

If eveything went well a CMD window will open saying: `Notion rich presence is running` and Notion will open as well.
### Running it with Notion on Linux
First do step one from [#Manually](Manually).

1. Make the shell script executable: `chmod +x start-notion.sh`
2. Run `./index.js`

If everything went well you will get some notion-related 

## Todos

- [ ] Make the rpc start automatically with notion
- [ ] Make it a notion enhancer feature

