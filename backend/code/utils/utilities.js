const fs = require("fs").promises;

async function extractJsonFile(filePath) {
    return JSON.parse(await fs.readFile(filePath, "utf-8"));
}

async function saveJsonFile(filePath, jsonData) {
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
}

module.exports = {
    extractJsonFile,
    saveJsonFile
};