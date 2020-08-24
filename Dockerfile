FROM node:12.18.3

WORKDIR /app
# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
#COPY package*.json /app
COPY . /app
RUN  npm install
#RUN mv ./node_modules/* /app/node_modules/
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код


EXPOSE 8080
#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
CMD [ "npm", "start" ]