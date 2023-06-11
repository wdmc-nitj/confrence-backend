# Use a Node.js base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# Copy the entire project to the working directory
COPY . .

# Install project dependencies
RUN yarn install

RUN npx prisma generate


# Expose the port your application listens on
EXPOSE 8000

# Define the command to run your application
CMD [ "yarn", "start" ]