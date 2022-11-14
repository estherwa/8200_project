#FROM python:3.10
#
#WORKDIR /app
#
#COPY . /app
#
#RUN  pip install -r requirements.txt
#RUN pip install --no-cache-dir -r requirements.txt
#RUN pip install --no-cache-dir matplotlib pandas
#
#EXPOSE 5000
#
#COPY . .
#CMD python3 app.py

# Base image
FROM node
# Make folder to put our files in
RUN mkdir -p /Users/estherwahnon/WebstormProjects/8200_project
RUN mkdir -p /Users/estherwahnon/WebstormProjects/8200_project/Backend
# Set working directory so that all subsequent command runs in this folder
WORKDIR /Users/estherwahnon/WebstormProjects/8200_project/Backend
# Copy package json and install dependencies
COPY package*.json ./
RUN npm install
# Copy our app
COPY . .
# Expose port to access server
EXPOSE 8080
# Command to run our app
CMD [ "npm", "start"]