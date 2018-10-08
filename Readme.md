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

```docker build -t stanislauy/<image name>:latest<version>```  **build image with custom name**<br><br>

```docker run -p [input PORT]:[inner PORT] <image name>``` **set up port to map port inside container**<br><br>


