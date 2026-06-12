require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mensajesRoutes = require('./src/routes/mensajesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());                    // Importante para web y apps móviles
app.use(express.json());            // Para leer JSON en el body

// Rutas
app.use('/api/mensajes', mensajesRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ 
        message: 'API de Mensajes funcionando correctamente 🚀',
        endpoints: {
            mensajes: '/api/mensajes',
            conversacion: '/api/mensajes/conversacion/:usuario1/:usuario2/:tenant_id'
        }
    });
});

// Manejo de errores general
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
});

//app.listen(PORT, () => {
//    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
//});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});