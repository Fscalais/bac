const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./config-swagger/swagger.yaml');

const app = express();

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Routes pour les commentaires
const commentairesRoutes = require('./routes/commentaire');
app.use('/commentaire', commentairesRoutes);

// Autres routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur Node.js avec Swagger!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
