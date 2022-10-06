const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;



// const { Operation } = require('./src/db.js');

// Operation.sync({force: true})


conn.sync({force: false}).then(() => {
    server.listen(PORT, () => {
        console.log(`Server is listening at port ${PORT}`)
    })
})
.catch(err => console.log(err))
