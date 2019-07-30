# Hello World Example

- [From the base image](./BASE_IMAGE.md)

## Building your own image

Let's build our first image with Dockerfile

```sh
docker build -t docker-intro/hello-world .
```

We can run a new container using our newly built image:

```sh
docker run -p 8080:5000 --rm docker-intro/hello-world
```

Start a shell in the container:

```sh
docker exec -it docker-intro/hello-world bash
```
