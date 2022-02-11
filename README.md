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