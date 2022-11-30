
# Project Setup
 1.Please clone the repo from https://github.com/KanhaKanha123/abn-amro-tv-show-app.git.\
 2.npm install.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Application design
1.Loosely coupled.\
2.Shared rating component.\
3.Mobile friendly.\

# Funcationality Dashboard
 1.Application will have listing on dashboard by genre names.\
 2.Each genre have more listing inside sorted by ratings.\
 3.Horizontal list will have 6 records with pagination in the bottom.\
 4.Count per page also is shown near pagination array.\
 5.Pagination works in memory by array.slice method so no api call is made.\
 6.Pagination will not be visible if list has less than 6 records.\
 7.All the validations for empty list or empty records are applied and empty message also displayed.\
 
# Search
1.Can type any keyword.\
2.Debouncing implemented to make performance better.\
3.After 500 miliseconds filtered records will be displayed for each genre.\

# Detail Page
1.Click on the cart.\
2.It will redirect you to the show detail page where you will see the detail of the show like name,image,rating,genre and summary.\

