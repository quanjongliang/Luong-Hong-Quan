FROM node:14


# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD [ "node", "index.js" ]
