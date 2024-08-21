FROM node:20
# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy the app, note .dockerignore
COPY . .
RUN npm i
RUN npm cache clean --force
RUN npm run build

# expose 3000 on container
EXPOSE 3000

# start the app
CMD [ "npm", "run", "dev" ]