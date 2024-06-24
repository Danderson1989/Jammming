# Jammmming

## Purpose

Jammming was created to help me hone my HTML, CSS, Javascript, and React skills.\
Visit https://dansjammming.netlify.app for a live view of the application.

## Technologies Used 

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### VScode
Text editor
### API calls and application setup
developer.spotify.com

## Features/Description

This application can query Spotify's database for tracks, create user playlists, and add tracks to a playlist

## Component/Module Breakdown

### App.js
Top level component containing all state variables and state update logic. Handles user's OAuth2 to allow the application to read the user's Id, create playlists, add tracks to playlist, and obtain access token. Returns JSX for the application.

### SearchBar.js
Contains JSX to create searchbar/labels and button for submission. User's query updates search state, which in turn is used for API call to spotify's track database. Spotify's response object is set to searchResults state.

### SearchResults.js
Maps searchResults object to display JSX unordered list of Tracks component.

### Track.js
Uses JSX to display returned songs by artist from album from API call. Handles adding tracks user selects to addedTracks state.

### Playlist.js
Uses state to save user's inputted playlist name. Renders Tracklist.js

### Tracklist.js
Renders tracks user would like to add to the playlist via addedTracks state. Allows users to remove tracks they decide not to add to their playlist. On submit calls function to obtain user's spotify Id, uses Id and playlist state to create playlist, and added tracks state to add tracks to playlist. Upon success notifies user and resets state values.

### App.css
CSS file to add styling to application

### Utils.js
Contains functions for Oauth2, accessToken, and API calls

## Video Walkthrough 
https://youtu.be/SmjeOHOw4bI
