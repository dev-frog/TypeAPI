# RestFull API using typescript

```node
npm i express debug winston express-winston cors
```

There are good resons for using those packages/libraries:

- `debug` It is a good way to debug your code and also avoid calling `console.log` all the time.
- `winston` is responsible for logging requests to our API and the responses and returned data.
- `express-winston` is a middleware that logs requests and responses to our API. It is integrated with `express` and `winston`. so that all standard API-related `console.log` calls are replaced with `winston` calls.
- `cors` is a middleware that allows us to send data from one domain to another. It is used to allow cross-origin requests.

> For typescript configuration we need those packages:

```node
npm i --save-dev typescript @types/debug @types/express  @types/cors source-map-support tslint
```
