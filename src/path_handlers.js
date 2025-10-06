import { readFileSync } from "node:fs";
        function show_image(src, width, height,alt) {
            // Create a new image element
            let img = document.createElement("img");

            // Set the source, width, 
            // height, and alt attributes
            img.src = src;
            img.width = width;
            img.height = height;
            img.alt = alt;

            // Append the image element
            // to the body of the document
            document.body.appendChild(img);
        }
const index_html = readFileSync("static/index.html");

const pathConfigs = [
  {
    path: "/",
    allowed_methods: ["GET"],
    handler: (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(index_html);
    },
  },
  {
    path: "/hello",
    allowed_methods: ["GET"],
    handler: (req, res) => {
      // res.writeHead(200, { "Content-Type": "text/plain" });
      // res.end("hello world!\n");
      show_image("/home/studenpdnt/first-project/public/12384883_su45220.jpg", 300, 300, "logo")
    },
  },
    {
    path: "/favicon.ico",
    allowed_methods: ["GET"],
    handler: (req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("he\n");
    },
  },
];

export function handlePath(path, req, res) {
  for (let config of pathConfigs) {
    if (path === config.path) {
      if (config.allowed_methods.includes(req.method)) {
        config.handler(req, res);
      } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method not allowed\n");
      }
      break;
    }
  }
}