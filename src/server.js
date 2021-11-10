import express from "express";

const PORT = 4000;
const app = express();

const urlLogger = (req, res, next) => {
    console.log("Path:", req.path);
    next();
};
const timeLogger = (req, res, next) => {
    var nowTime = new Date();
    var year = nowTime.getFullYear();
    var month = nowTime.getMonth();
    var date = nowTime.getDate();
    
    console.log("Time:", `${year}.${month + 1}.${date}`);
    next();
};
const securityLogger = (req, res, next) =>{
    const protocol = req.protocol;
    if (protocol === "https"){
        console.log("Secure");
    }    
    console.log("Insecure");
    next();
};
const protectorMiddleware = (req, res) => {
    console.log("❌");
    return res.end();   
};

const handleHome = (req, res)=>{    
    return res.send("<h1>It is home</h1>");
};

app.use(urlLogger,timeLogger,securityLogger);
app.get("/", handleHome);
app.get("/protected", protectorMiddleware);


const handleListening = () => console.log (`Server on port http://localhost:${PORT}`);

app.listen(4000, handleListening);