#!/bin/bash

# exit immediately if a command exits with a non-zero status
set -e

# Create a network
docker network inspect app-network >/dev/null 2>&1 || docker network create app-network

# Build the image based on the Dockerfile
docker build -t preprocessor .

# Run the container
docker run --rm -it -p 8005:8005 --network app-network --mount type=bind,source="%cd%",target=/code/app --name preprocessor preprocessor

