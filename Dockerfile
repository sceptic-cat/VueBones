FROM node:14.8.0

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node
COPY --chown=node:node . /home/node/app
RUN  npm install
# RUN npm ci --only=production

EXPOSE 8080

CMD [ "npm", "start" ]