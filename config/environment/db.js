const database = {
    local : {
        host : 'localhost',
        port : 3306,
        user : 'test',
        pass : 'test1234'        
    },
    development : {
        host : 'dev',
        port : '',
        user : '',
        pass : ''
    },
    qa : {
        host : 'qa',
        port : '',
        user : '',
        pass : ''
    },
    prod : {
        host : 'prod',
        port : '',
        user : '',
        pass : ''
    }
}

module.exports = database;