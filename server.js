var app = require('./app/app'); 

const environment = require('./config/environment/factoryEnv');

const apiPort = process.env.PORT || 3000;

app.listen(apiPort, () => {
    console.log('using environment : ');
    console.log(JSON.stringify(environment.getDatabase()));    
    console.log(JSON.stringify(environment.getMongoDB()));
    console.log(JSON.stringify(environment.getApiRemote()));
});
