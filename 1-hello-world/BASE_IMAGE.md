# Hello world with base image

Create a container:

```sh
docker run ubuntu bash -c "echo Hello from the container"
```

List containers:

```sh
docker ps
```

We need to provide -a (--all) option to see stopped containers:

```sh
docker ps -a
```

Run a container with custom name:

```sh
docker run --name hello-world ubuntu bash -c "echo Hello from the container"
```

Starting a container:

```sh
docker start hello-world
```

Let's check the containers:

```sh
docker ps -a
```

It doesn't seem to be running, let's see the logs:

```sh
docker logs -f hello-world
```

So it ran twice because we started it again, but it didn't live long.

Let's delete that and try to keep a container alive:

```sh
docker rm hello-world
```

Let's start a container that will stay alive longer:

```sh
docker run --name hello-world ubuntu bash -c "echo Started running; sleep 100000"
```

We are stuck with the container, let's kill it from another terminal:

```sh
docker kill hello-world
docker rm hello-world
```

Let's send it to the background this time:

```sh
docker run --detach --name hello-world ubuntu bash -c "echo Started running; sleep 100000"
```

Let's check if it's alive:

```sh
docker ps
```

Let's execute a command in the running container:

```sh
docker exec hello-world bash -c "echo Hello from running container"
```

We can start an interactive terminal with -it (--interactive, --tty):

```sh
docker exec -it hello-world bash
```

Let's jump into another terminal and copy `example.txt` to the running container:

```sh
docker cp example.txt hello-world:/example.txt
```

We can see that the file is copied into the container:

```sh
cat /example.txt
```

Let's delete the container to start over

```sh
docker rm --force hello-world
```
