FROM node:16.13.1
RUN apt-get update -qq && apt-get install -y build-essential nodejs mariadb-client vim
WORKDIR /usr/src/app
CMD yarn install && yarn dev