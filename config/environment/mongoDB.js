const mongoDb = {
    local : {
        host : 'localhost',
        port : 27017,
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

module.exports = mongoDb;