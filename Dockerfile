FROM node:20.9.0-alpine
RUN mkdir -p /var/www/app/routes && chown -R node:node /var/www
USER node
WORKDIR /var/www
COPY --chown=node:node . /var/www/
#COPY --chown=node:node env /var/www/.env

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]