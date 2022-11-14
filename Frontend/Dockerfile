#FROM python:3.10
#
#WORKDIR /app
#
#COPY Frontend /app
#
#RUN  npm install
#
#COPY . .
#
#RUN npm run build
#
#EXPOSE 3000
#
#imp
# Base image
FROM node
# Make folder to put our files in
RUN mkdir -p /Users/estherwahnon/WebstormProjects/8200_project/
RUN mkdir -p /Users/estherwahnon/WebstormProjects/8200_project/Frontend
# Set working directory so that all
# subsequent command runs in this folder
WORKDIR /usr/src/app/frontend
# Copy package json and install dependencies
COPY package*.json ./
RUN npm install
# Copy our app
COPY . .
# Expose port to access server
EXPOSE 3000
# Command to run our app
CMD [ "npm", "start" ]