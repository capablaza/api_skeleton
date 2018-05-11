var app = require('./app/app'); 

var enviroment = require('./config/enviroments/factoryEnv');

var apiPort = process.env.PORT || 3000;

app.listen(apiPort, () => {
    console.log("working with :"+JSON.stringify(enviroment.getEnviroment()));
});
