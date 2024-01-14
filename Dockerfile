# Utilisez une image Node.js Alpine
FROM node:18-alpine

# Installez nodemon globalement
RUN npm install -g nodemon

# Définissez le répertoire de travail dans le conteneur
WORKDIR /src

# Copiez les fichiers de configuration du projet
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Commande pour démarrer votre application
CMD ["node", "index.js"]
