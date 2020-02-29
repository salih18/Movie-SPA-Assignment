# Movie App as a Single Page Application

The SPA with three pages (routes):

- A details page for the TV show "Powerpuff Girls",
- An episode detail page with information about specific episode.
- Notfound page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Demo

Online Deployment of this project is available at [Create React App](https://github.com/facebook/create-react-app).

### Getting Started

To get started you can simply clone the repo and install the dependencies and run

| Steps   | with [Yarn](https://yarnpkg.com/) | with [NPM](https://www.npmjs.com/) |
| ------- | --------------------------------- | ---------------------------------- |
| Install | `yarn install`                    | `npm install`                      |
| Run     | `yarn start`                      | `npm start`                        |

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Directory Layout

```

├── public
├── src                                   # The source code of the application
│   ├── actions                           # Actions are dispatched by components
│   │   ├── alert.js
│   │   ├── data.js
│   │   ├── episode.js
│   │   ├── season.js
│   │   └── types.js
│   ├── components
│   │   ├── episode
│   │   │   ├── EpisodeAttributes.js
│   │   │   ├── EpisodeBreadcrumb.js
│   │   │   ├── Episode.js
│   │   │   └── EpisodeSummary.js
│   │   ├── layout
│   │   │   ├── Alert.js
│   │   │   ├── LoadingCard.js
│   │   │   ├── Navbar.js
│   │   │   └── NotFound.js
│   │   └── show
│   │       ├── ShowAttributes.js
│   │       ├── ShowEpisodes.js
│   │       ├── Show.js
│   │       ├── ShowSeasonList.js
│   │       └── ShowSummary.js
│   ├── reducers                          # Reducers produce the state of an application
│   │   ├── alert.js
│   │   ├── data.js
│   │   ├── episode.js
│   │   ├── index.js
│   │   └── season.js
│   ├── App.css
│   ├── App.js
│   └── store.js                          # Redux store

```

### Application

#### ES6 + Features

- Arrow Functions
- Template Literals
- Destructuring Assignment
- Block-Scoped Variables Let and Const
- async await with try/catch
- Spread operator
- Modules export/import
- New Built-In Methods

#### Libraries/Frameworks

- react: UI library
- react-router-dom: The router components
- redux react-redux: Global State Management
- redux-thunk: Middleware for async calls
- react-html-parser: to parse html
- react-moment: to manipulate date obj
- semantic-ui-react: React integration for Semantic UI Framework
- axios: to make HTTP requests

#### Flow

##### Component Hierarchy

```
  App
│ │
│ ├── Navbar
│ │
│ ├── Show
│ │ ├── ShowSummary
│ │ ├── ShowAttributes
│ │ ├── ShowEpisodes
│ │ └── LoadingCard
│ │
│ ├── Episode
│ │ ├── EpisodeBreadcrumb
│ │ ├── EpisodeSummary
│ │ ├── EpisodeAttributes
│ │ └── LoadingCard
│ │
│ ├── NotFound
│ │
│ └── Alert

```

##### Global State Flow

```
{
 alert: [],
 data: {
   show: {...}
   loading: false
 },
 episode: {
   episode: {...},
   loading: false
 },
 season: 1
}

```

#### Api Call

1. In the Show Component the request is made to below address, and the response also consists of seasons and episodes. Then the data is manipulated with reduce method by seperating the episodes in terms of seasons.

// Get show by name

```
`http://api.tvmaze.com/singlesearch/shows?q=${showName}&embed[]=episodes&embed[]=cast&embed[]=seasons`,

```

##### Session Storage

After the first request the show data is stored in sessionStorage.

2. In the Episode Component the request is made to below address, and the response also consists of seasons and episodes

// Get episode by ID

```
http://api.tvmaze.com/episodes/${id}?embed=show

```

### Author

- [salih18](https://github.com/salih18)
