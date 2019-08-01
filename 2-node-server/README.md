# Docker Node Server Demo

## Building and running

First build the image:

```sh
docker build -t docker-intro/node-server .
```

Run the container:

```sh
docker run -it -p 3000:3000 docker-intro/node-server
```

You can provide different environment variables while running your container:

```sh
docker run -it -e DATA_DIR=/data -p 3000:3000 docker-intro/node-server
```

If you want to run it in background:

```sh
docker run -d -e DATA_DIR=/data -p 3000:3000 docker-intro/node-server
```

## Development

After building the image, you can mount the source directory and start the development server:

```sh
docker run -it -p 3000:3000 -v $PWD:/app docker-intro/node-server yarn dev
```

If you want to debug it you can just publish the debugging ports by adding `-p 9229:9229` option:

```sh
docker run -it -p 3000:3000 -p 9229:9229 -v $PWD:/app docker-intro/node-server yarn dev
```

## API

### Get Data

Send `GET` request to `http://localhost:3000/:key`

Response:

```json
{
  "error": null,
  "data": {
    "foo": "bar"
  }
}
```

### Set Data

Send `POST` request to `http://localhost:3000/:key` with JSON body payload:

```sh
curl --request POST \
  --url http://localhost:3000/test \
  --header 'content-type: application/json' \
  --data '{
	"foo": "bar"
}'
```

Response:

```json
{
  "error": null,
  "data": null
}
```
