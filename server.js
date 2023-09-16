const {app} = require('./server/configs.js')

app.listen(5000, ()=>{
    console.log('Server started successfully! Listening on port 5000!')
})