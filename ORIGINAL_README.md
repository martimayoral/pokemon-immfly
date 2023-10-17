# Pokemon test
Hello. This is the Immfly frontend code test. You have to build a web
application listing the **first pokemon generation**.
## Features to implement
### Build and style the main list
You have to implement the main list like in this image:
<img align="center" src="https://imgur.com/HNu1wmq.png" style="border: 1px
solid black" />
Notice that:
* The url is **/pokemon**.
* When user hovers a pokemon, its background becomes gray.
### Pokemon detail page
Add the possibility to click on a pokemon and go to the detail page, like
in this image:
<img align="center" src="https://imgur.com/1Mbh6mK.png" style="border: 1px
solid black" />

Notice that the pokemon detail url is different. It is ``/pokemon/:name``.
In the **charizard** example is ``/pokemon/charizard``.
### Images
The images url is
``https://img.pokemondb.net/sprites/black-white/anim/normal/{name}.gif``
For example:
* **Charizard**
<img align="center"
src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.g
if"/>

* **Bulbasaur** <img align="center"
src="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.g
if" />

### Api Endpoints
The api base url is ``https://pokeapi.co/api/v2``.
* **List**: ``/pokemon`` (maybe you have to add the limit parameter on the
request to fetch the first generation in only one request).
* **Detail**: ``/pokemon/:name``.
For example:
* **Charizard**: ``https://pokeapi.co/api/v2/pokemon/charizard``
* **Bulbasaur**: ``https://pokeapi.co/api/v2/pokemon/bulbasaur``
## Demo

You can watch/download the video showing how the app finally should work:
<a
href="https://mega.nz/file/2JNVlIzb#kmmubCQEUQV0RgZ9dExTC64P_9eDNBPE8zgNNS
-b0do" target="_blank">demo</a>.

## 🧐 We want to see 🧐
- React knowledge (**hooks** and last features).
- Project architecture
- Css skills
- Javascript skills
- Clean code and good practices
## ✅ You should ✅
- **NOT USE** bootstrap or other css frameworks.
- **Prevent unknown urls** while redirecting to the list page
- Avoid using 3d party packages as much as you can
- Pay attention to details
- Responsiveness (mobile/tablet/desktop)
- *The simple, the better*, avoid overengineering.
## 🌟 Bonus 🌟
- Allow to select user's favourite pokemon and see them in a new page.
Feel free to design it.
- Add a filter to search pookemon by name
- Use **styled-components**
- Add **tests**
- Use a **linter**
- Custom **webpack** implementation instead of **create-react-app** or
similar packages
