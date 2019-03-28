import http from "http";

export default (method, url, auth = "", payload) =>
  new Promise((resolve, reject) => {
    const path = url.slice(url.indexOf("/api"));
    const addr = url.split("/")[2].split(":");
    const hostname = addr[0];
    const port = addr[1];

    let json = "";
    if (method === "POST" && payload) {
      json = JSON.stringify(payload);
    }

    const options = {
      hostname,
      port,
      path,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
        "Content-Length": json.length
      }
    };

    const req = http.request(options, res => {
      console.log(`STATUS: ${res.statusCode}`);
      let data = "";
      res.setEncoding("utf8");
      res.on("data", chunk => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          console.log("parsed", parsedData);
          resolve(parsedData);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on("error", e => {
      console.error(`ERROR: ${e.message}`);
    });
    if (method === "POST" && json.length > 0) {
      req.write(json);
    }
    req.end();
  });
