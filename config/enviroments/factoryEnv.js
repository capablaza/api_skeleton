const localEnviroment = require('./localEnv');
const devEnviroment = require('./devEnv');
const qaEnviroment = require('./qaEnv');
const prodEnviroment = require('./prodEnv');

module.exports = {    
    getEnviroment : function(){    
        const enviroment = process.env.ENVIROMENT || 'local';        
        switch(enviroment){
            case 'local' : return localEnviroment;
            case 'dev' : return devEnviroment;
            case 'qa' : return qaEnviroment;
            case 'prod' : return prodEnviroment;
            default : return localEnviroment;
        }        
    }
}