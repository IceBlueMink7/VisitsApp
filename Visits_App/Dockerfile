# selecting base image
FROM node:alpine

#selecting working directory to transfer files to
WORKDIR '/app'

# copying package.json file first so npm install runs before any working files are changed
COPY package.json .
RUN npm install
COPY . .

# running startup command
CMD ["npm", "start"]