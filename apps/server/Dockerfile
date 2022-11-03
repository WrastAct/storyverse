FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# If for production
# RUN npm ci --only=production

COPY . .

CMD [ "npm", "run", "dev" ]