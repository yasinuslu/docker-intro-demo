# Docker Compose API and Frontend

## Requirements

- docker
- docker-compose

For simplicity this example doesn't have different configs for `production` and `development` environments.
Ideally you would want a base `docker-compose.yml` and bunch of different `yml` files that can override the base config for different environments.
But in that kind of setup you will have to pass the filenames every time you run a `docker-compose` command.

## Development

You can just run:

```sh
docker-compose up -d
```

And then you can see the logs with:

```sh
docker-compose logs -f
```

If you want to see logs for a specific service:

```sh
docker-compose logs -f {serviceName}
```

If you want to rebuild your images for some reason:

```sh
docker-compose build
```

If you want to debug a service you can attach to it by running:

```sh
docker-compose exec {serviceName} sh
```

You can also execute a command other than `sh`:

For example if you want to inspect the redis database:

```sh
docker-compose exec redis redis-cli
```
