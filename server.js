import express from 'express'
import { connect } from './config.js'
import cors from 'cors'
// Macrociclo
import macroRoute from './routes/macroRoutes.js'
// Mesociclo
import mesoRoute from './routes/mesoRoutes.js'
// Microciclo
import microRoute from './routes/microRoutes.js'
// Sesion
import sesionRoute from './routes/sesionRoutes.js'

// Capacidades Físicas Condicionales y Coordinativas
import conditionalRoute from './routes/conditionalRoutes.js'
import coordinativeRoute from './routes/coordinativeRoutes.js'

// Dinamicas
import dynamicRoute from './routes/dynamicRoutes.js'
// Ejercicios
import trenSupRute from './routes/trenSupRoutes.js'
import trenInfRute from './routes/trenInfRoutes.js'


connect()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('dist'))
app.use(cors())

app.listen(8000,() => {
    console.log('Servidor escuchando en el puerto 8000')
})

// Capacidades Físicas Condicionales y Coordinativas
app.use('/conditionals', conditionalRoute)
app.use('/coordinatives', coordinativeRoute)

// Macrociclo
app.use('/macrocicles', macroRoute)
// Mesociclo
app.use('/mesocicles', mesoRoute)
// Microciclo
app.use('/microcicles', microRoute)

// Dinámicas
app.use('/dynamics', dynamicRoute)

// Sesion
app.use('/sesions', sesionRoute)

// Ejercicios
app.use('/exercises/tren-sup', trenSupRute)
app.use('/exercises/tren-inf', trenInfRute)
