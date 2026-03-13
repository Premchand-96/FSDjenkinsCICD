#!/bin/bash

echo "Stopping old backend..."

pkill node || true

echo "Starting backend..."

cd backend
npm install
node server.js &

echo "Starting frontend..."

cd ../frontend
npm install -g http-server
http-server -p 8081 &
