module.exports = {
    home : function(){
        return new Promise((resolve, reject)=>{
            const user = {
                name : "jbada",
                email : "adsa"
            };
            resolve(user);
        });
    },
    save : (data) => {
        console.log(data);
    }
}