#!/bin/bash
docker compose build
docker compose up -d
# docker build -t my-app .
# docker run --rm -d -p 80:80 my-app
