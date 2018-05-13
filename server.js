var app = require('./app/app'); 

const enviroment = require('./config/enviroments/factoryEnv');

const apiPort = process.env.PORT || 3000;

app.listen(apiPort, () => {
    console.log('using enviroment : ');
    console.log(JSON.stringify(enviroment.getDatabase()));    
    console.log(JSON.stringify(enviroment.getMongoDB()));
    console.log(JSON.stringify(enviroment.getApiRemote()));
});
