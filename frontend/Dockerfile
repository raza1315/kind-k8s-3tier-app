# Use a lightweight Node.js image
FROM node:alpine 

# Set working directory
WORKDIR /frontend

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the built files
RUN npm install -g serve

# Expose the correct port for production
EXPOSE 5173

# Serve the built frontend
CMD ["npx","serve", "-s", "dist", "-l", "5173"]

