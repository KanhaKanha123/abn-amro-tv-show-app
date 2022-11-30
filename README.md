
# Project Setup
 1.Please clone the repo from https://github.com/KanhaKanha123/abn-amro-tv-show-app.git. \
 2.npm install.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

This one is to run tests with coverage.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

# Application config settings
1.Route Paths,Item per genre and API paths all you can congure in constants/constant.ts file. Like you can change item per genre 6,7,8....., Right now it's 5 per Horizontal list.

# Application design
I choose React for this task. Because i am more expert in react than VueJs. Both are nice libraries and light weight. Below are few points which i choose to design application well strucured,high performance,readable and accessible.

1.Loosely coupled.\
2.Shared resuable component.\
3.Mobile friendly responsive design.\
4.Cashing implemented by local storage to make performance better.\
5.Unit test cases implemented with code coverage around 74%.\
6.Accessibility attribute added.\
7.For now data is fetched for page=0 only. but i have written some code if we want to fetch more records. Because page=0 itself was having more that 200 records. I just tried to display those and performed all the things.\
8.Pagination added, 5 items in the list to show data nicer for all genres few records.\
9.Loader added when call to api to show user that api call is happening.\
10.Error handling and Empty data validations added to show friendly message to user.\
11.Error boundries implemented to catch compile time errors so whole app will not break.\
12.State is manage by cotext api and useReducer hook.So we can access state anywhere in the application.\
13.Reusable custom hook implemented to perform api calls. this hook can be call from anywhere in the app.

# Funcationality Dashboard
 1.Application will have listing on dashboard by genre names.\
 2.Each genre have more listing inside sorted by ratings.\
 3.Horizontal list will have 5 records(you can change it in constants/constant.ts) with pagination in the bottom.\
 4.Count per page also is shown near pagination array.\
 5.Pagination works in memory by array.slice method so no api call is made so performance will be faster.\
 6.Pagination will not be visible if list has less than 5 records.\
 7.All the validations for empty list or empty records are applied and empty message also displayed.
 
# Search
1.Can type any keyword.\
2.Debouncing implemented to make performance better.\
3.After 500 miliseconds filtered records will be displayed for each genre.\
4.Search is using "include algorithm" so it will match chars anywhere in the show name EX.. Show should contain the search term that's enough.

# Detail Page
1.Click on the cart.\
2.It will redirect you to the show detail page where you will see the detail of the show like name,image,rating,genre and summary.\
3.By clicking "Go back to dashboard" link you can redirect to listing page.

