# frontend/Dockerfile

# Use Node.js 20.9.0 Alpine as the base image
FROM node:20.9.0-alpine

# Set environment variables for Node.js
ENV NODE_ENV=production

# Create app directory
WORKDIR /var/www/app

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Change ownership to non-root user
RUN chown -R node:node /var/www/app

# Switch to non-root user
USER node

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
