# ipea

Service that protects iped `POST` requests by receiving and comparing a string to a key previously defined in environment variables.

Listens to requests on `/:key` endpoint and responds `200; OK` if received key is the same as the defined in environment variables, otherwise responds `401; Unauthorized`.

## Requirements

- Node.js `v8.10.0` installed (Version that the service was developed, may work with other versions)

## Install dependencies

Execute the following command on project root:

```
npm install .
```

## Run

To run it is first needed to setup the following environment variables:

|Variable|Description|
|--------|-----------|
|`PORT`|Port which service will be available on|
|`KEY`|String that identifies the authorized key|

Then execute the following command:

```
npm start
```
