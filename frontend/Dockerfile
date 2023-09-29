# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the Angular CLI globally (if necessary)
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular application for production
RUN ng build
