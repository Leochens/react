import mysql from 'mysql';
const db = {}
db.connection = () => {
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        post: '3306',
        database: 'todolist'
    });
    connection.connect(err=>{
        if(err){
            console.log('db connect err:',err);
            return
        }
    })
    return connection;
}
// console.log(db);

export default db;