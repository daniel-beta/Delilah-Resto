const express = require('express')
const helmet = require('helmet')
const sequelize = require('./conexion')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000

const authRouter = require('./routes/auth.routes')
const mealsRouter = require('./routes/meals.routes')
const usersRouter = require('./routes/users.routes')
const orderRoutes = require('./routes/orders.routes')

const app = express()
app.use(helmet())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false })) //revisar
app.use(bodyParser.json())

app.use('/v1/api/auth', authRouter)
app.use('/v1/api/meals', mealsRouter)
app.use('/v1/api/users', usersRouter)
app.use('/v1/api/orders', orderRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server started in the PORT ${PORT}`);
})

module.exports = app