# folio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Rather than creating first and second for project features etc we can do something like this in the query:
 firstSectionSlidesCollection {
    items {
        ... on Project {
          sys {
            id
          }
          title
        }
    }
}


## Helpful info / resources

- [graphQL contentful playground](https://graphql.contentful.com/content/v1/spaces/b26b3xfjy4l5/explore?access_token=Noh2s2T65LaZCtqc_9Y2a4DSh7Qrq94keE3iaVSYR7s)
- [graphQL entry limits](https://github.com/vercel/next.js/discussions/33642)