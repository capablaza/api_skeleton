const db = require('../enviroments/db');
const mongoDB = require('../enviroments/mongoDB');
const apiPaths = require('../enviroments/apiRemote');

module.exports = {    
    getDatabase : function(){            
        switch(this.loadEnviroment()){
            case 'local' : return db.local;
            case 'dev' : return db.development;
            case 'qa' : return db.qa;
            case 'prod' : return db.prod;
            default : return db.local;
        }        
    },
    getMongoDB : function(){
        switch(this.loadEnviroment()){
            case 'local' : return mongoDB.local;
            case 'dev' : return mongoDB.development;
            case 'qa' : return mongoDB.qa;
            case 'prod' : return mongoDB.prod;
            default : return mongoDB.local;
        }   
    },
    getApiRemote : function(){
        switch(this.loadEnviroment()){            
            case 'dev' : return apiPaths.development;
            case 'qa' : return apiPaths.qa;
            case 'prod' : return apiPaths.prod;
            default : return apiPaths.development;
        }   
    },
    loadEnviroment : function(){
        return process.env.ENVIROMENT || 'local';        
    }
}