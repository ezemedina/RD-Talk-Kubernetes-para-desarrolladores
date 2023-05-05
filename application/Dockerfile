FROM node:lts-alpine
COPY . .
RUN npm ci
RUN npm cache clean --force
ENTRYPOINT [ "npm", "start" ]
