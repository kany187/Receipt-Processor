# Receipt-Processor

# Build a docker image 

Build a docker image by running this command ----> "docker build -t node-docker ."

# Start the project / Start a container

Run this command -----> "docker run -d -p 4000:4000 --name api node-docker"

The app will be running on "localhost:4000"

# Endpoints available

1- POST: http://localhost:4000/receipts/process

2- GET: http://localhost:4000/receipts/{id}/points

The post method will generate an ID that can be used in the GET method. Replace the `id` with the generated ID of the POST method.

# Stop container

Run this command -----> "docker stop api"  



  
