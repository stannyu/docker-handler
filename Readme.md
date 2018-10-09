## DOCKER COMMANDS   ##
```docker ps``` **shows running containers**<br><br>
```docker ps —all``` **show all containers running and stopped already.**<br><br>
```docker images``` **show images**<br><br>
```docker run <image-name> ```  **run image (create & start), can be started with id of image**<br><br>
```docker system prune``` **remove old containers**<br><br>
```docker system prune -a``` **remove old containers, and images that are unused**<br><br>
```docker images -a``` **remove images**<br><br>
```docker logs <container id>``` **shows stopped container logs (not restarting container)**<br><br>


```docker stop <container id>``` **stops running container with cleanup**<br><br>
```docker kill <container id>``` **kills running container immediately**<br><br>


```docker exec -it <container id> <command>``` **execute additional command into container (-it : allows to provide input to container)**<br><br>

```docker run -it <container id> sh``` **running linux command shell, command that helps to execute different commands inside running container simultaneously**<br><br>

### BUILDING OWN IMAGE ###

```docker build -t stanislauy/<image name>:latest<version> .```  **build image with custom name. Dot represents path.**<br>

```docker run stanislauy/<image name>``` **Start running custom image.**<br>

```docker run -p [input PORT]:[inner PORT] <image name>``` **set up port to map port inside container**<br>

### DOCKER COMPOSE ###
```version: '3'``` 
Specifies version of docker compose that we want to use.<br><br>

```services: ``` Section that sets up different types of containers.<br><br>

```
redis-server:
     image: 'redis'
```
Specifying the container we want to create using image (redis in this case).<br><br>
   
```
node-app:
    restart: always
    build: .
    ports:
      - "4001:3000"
```
Creating node-app service using Dockerfile in current directory (by ```build: .``` command where dot is a path). Setting restart option to always (always restarts node-app in case of process.exit(<status code>)). Sets ports mapping from outside of container (```-``` specifies an array in *.yml files).





