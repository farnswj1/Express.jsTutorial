# base image
FROM node:19-alpine

# expose port(s)
EXPOSE 8000

# set directory
WORKDIR /opt/app

# add application and install dependencies
COPY package.json package-lock.json ./
RUN npm install
COPY . ./

# setup the build
RUN npm run build

# run the server
CMD ["npm", "start"]
