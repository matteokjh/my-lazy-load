const fs = require("fs");
const { promisify } = require("util");
const http = require("http");
const PORT = 8989;

const p_readdir = promisify(fs.readdir);

async function getImages() {
    try {
        const list = await p_readdir("./static", "utf-8");
        return list;
    } catch (err) {
        console.error(err);
    }
}

const app = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://demo.sulpures.com");
    const list = await getImages();
    const data = JSON.stringify(list);
    res.write(data);
    res.end();
};

http.createServer(app).listen(PORT);
console.log(`listening ${PORT}`);
