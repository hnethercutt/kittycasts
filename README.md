<a id="readme"></a>

<!--APP LOGO-->
<br />
<div align="center">
  <img src="https://github.com/user-attachments/assets/62c3275d-f9cd-4c95-a1e0-b66f341d0f0b" width="150px">
  
  <h3 align="center">kittycaSts</h3>
  
  <p align="center">A cute cat themed weather app! All artwork is original and drawn using Procreate.</p>
</div>

<!--TABLE OF CONTENTS-->
<details>
  <summary>:rainbow: Table of Contents 😻: </summary>
  <ol>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#preview">Preview</a></li>
      </ul>
    </li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#future-plans">Future Plans</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!--ABOUT-->
## About
This is my first web development project. In searching for ideas for beginner projects, I saw weather apps being mentioned frequently. I checked out several good projects other people created and decided I wanted to do something a bit different. I love cute things, cats, and making digital art, so I thought it would be fun to combine those interests with my interest in web development. The idea of including a customizable cat with a "chat box," came to me almost immediately. I initially planned for the cats to pop up in outfits based on the weather and give users recommendations on what to wear that day. This is a feature I intend to implement in the future.

There were also a couple things I noticed weren't featured in other beginner apps that went to the top of my list for what I wanted to implement in my own project, specifically an autocomplete search bar and accuracy when searching for cities. 

So, I took my ideas, spent a ton of time drawing, spent even longer teaching myself JavaScript, CSS and Vue, as well as furthering the knowledge I did have of HTML, and voila! kittycaSts was created! 😺

kittycaSts is still a work in progress, but I've gotten most of it completed now. Updates to come!

### Built With

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<!--USAGE AND INSTALLATION-->
## Usage

The following section defines how to download and use the **kittycasts** application.

### Prerequisites

- [Node.js](https://nodejs.org/en)
- npm (installed as part of Node installation)

### Installation

1. Get a free API key from [WeatherAPI](https://www.weatherapi.com/)
  
2. Clone the repository

```sh
git clone https://github.com/hnethercutt/kittycasts.git
```

3. Install dependencies

```sh
npm install
```

4. Enter your API in `WeatherAPI.js` in the **services** folder

```js
const key = "your API key";
```

### Preview

The following will execute the npm script to start the development server with hot-reload enabled

```sh
npm run dev
```

<p align="right">(<a href="#readme">Back to top</a>)</p>

<!--USAGE EXAMPLES/SCREENSHOTS-->
## Screenshots

**Note:** I have not finished making the application responsive. Thus, it may look different for you depending on your screen size.
<br />
<br />

<p align="center">
  <b>The page when it initially loads</b>
  <br />
  <br />
  <img width="1277" alt="Screenshot 2025-01-22 161514" src="https://github.com/user-attachments/assets/00410ce1-25f2-4b8f-a451-b8c31e9e737f" />
</p>

<p align="center">
  <b>The autocomplete search bar</b>
  <br />
  <br />
  <img width="371" alt="search" src="https://github.com/user-attachments/assets/33cf375c-ff50-43f8-95e0-0b5eb0036a6b" />
</p>

<p align="center">
  <b>An example of weather data and the cat's text box (The text is animated)</b>
  <br />
  <br />
  <img width="856" alt="panel" src="https://github.com/user-attachments/assets/11949502-f703-44c1-a14f-5e10c801edff" />
</p>

<p align="center">
  <b>A cat that has been customized</b>
  <br />
  <br />
  <img width="823" alt="custom" src="https://github.com/user-attachments/assets/fead6656-7b4f-4639-8657-e9221c138e59" />
</p>

<p align="right">(<a href="#readme">Back to top</a>)</p>

<!--FUTURE PLANS/TO-DO LIST-->
## Future Plans

- [ ] Finish making the app responsive 
- [x] Make cat text dialogue more interesting
- [X] Add a dark mode
- [ ] Add option to change weather data to metric system
- [ ] Deploy

<p align="right">(<a href="#readme">Back to top</a>)</p>

## License

kittycaSts is licensed under the MIT License. See [LICENSE.txt](LICENSE.txt) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
