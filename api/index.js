const server = require('./src/app.js');
const { conn } = require('./src/db.js');






conn.sync().then(() => {
    server.listen(3001, () => {
        console.log('Server is listening at port 3001')
    })
})
.catch(err => console.log(err))