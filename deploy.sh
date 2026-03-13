#!/bin/bash

echo "Starting Deployment"

# stop old backend
pkill node

# backend setup
cd backend
npm install

# start backend
nohup node server.js > backend.log 2>&1 &

# frontend setup
cd ../frontend

# install simple server if not installed
npm install -g http-server

# stop old frontend
pkill http-server

# start frontend
nohup http-server -p 8081 > frontend.log 2>&1 &

echo "Deployment Completed"
