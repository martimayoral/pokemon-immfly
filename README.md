
# Immfly frontend code test

Hello, I'm Martí Mayoral, this is my front end test.

## ▶️ Run the app ▶️

I have uploaded a build of the app in [my web page](https://www.martimayo.com/demo/immfly/) so you don't have to serve it locally to test it.

To clone it and run it locally it works like any other: Clone, install, and run (`npm start`).
To run the tests execute  `npm test`.
To build execute `npm run-script build`. This will create a folder `build` with the build.

## 🛠️ Features implemented 🛠️

I completed all features to implement as well as the bonus features.

### Features required

The web application shows a main pokemon list of the first generation (151 pokemon). The url is **/pokemon** and the background becomes gray on hover.
Each pokemon is displayed with its name and gif.
The detail page **/pokemon/:name** works as expected, showing info about the pokemon desired.
The application is responsive, clean, with attention to detail and 3d party packages have been avoided.

### Bonus features

#### Favourite pokemon

A new page has been created with the endpoint **/favourites** that allows the user to see their favourite pokemon. To set a pokemon as favourite, the user has to click the **star ⭐** icon next to it.

#### Filter by name

There is a input box for the user to filter pokemons by name. There is a **x** button to clear, as it is an standard *search* input.

#### Styled-components

Styled components have been used.

#### Tests

To be able to test I used the framework [jest](https://jestjs.io/) along with the [react testing library](https://testing-library.com/docs/react-testing-library/intro/). I created a total of 17 unit tests for the components.
There are mundane tests such as checking if the component is rendered, and also more elavorated ones that handle clicks or use Api mocks.

#### Linter

The [JavaScript Standard Style](https://standardjs.com/) linter has been used.

#### Custom webpack

A custom webpack has been used (see below for more information).

## 🗂️ Project Srtucture 🗂️

The project is structured by folders. Each folder containing its component and tests. The main structure is as follows:
```
-src/
---assets/
---components/
---contexts/
---layouts/
---pages/
---routes/
---styles/
``` 

## 🏗️ Webpack 🏗️

It had been a while since I didnt create a custom webpack. It was interesting to use all the new updates and functionalities that it provides.
I used [webpack](https://webpack.js.org/) with the basic and standard configuration for react projects (using [@babel/preset-react](https://babeljs.io/docs/babel-preset-react)).
I also added a few details such as hashing the name of the output production script files or using a source-map to debug more easily.