## Sample docker task

# The aim is to setup a simple nodejs server containerized with docker and running on nginx as a reverse proxy

To build the node server:
docker build -t server_name .

To build docker image for nginx:
docker build -t nginx_proxy .

link node and nginx and run:
docker run -d -p 8080:80 --link server_name nginx_proxy
