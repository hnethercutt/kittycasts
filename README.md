<a id="readme-top"></a>

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
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
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

<img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D">

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

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

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!--USAGE EXAMPLES/SCREENSHOTS-->
## Screenshots

**Note:** I have not finished making the application responsive. Thus, it may look different for you depending on your screen size.
<br />
<br />

<p align="center">
  <b>The page when it initially loads</b>
  <br />
  <br />
  <img src="https://github.com/user-attachments/assets/b18c6d4a-b470-4b20-84b8-cbdb01614d5e">
</p>

<p align="center">
  <b>The autocomplete search bar</b>
  <br />
  <br />
  <img src="https://github.com/user-attachments/assets/4d8f0c47-8c08-49c1-a935-689f9fc690d2">
</p>

<p align="center">
  <b>An example of weather data and the cat's text box (The text is animated)</b>
  <br />
  <br />
  <img src="https://github.com/user-attachments/assets/00bf028f-bacd-41ee-abf6-ecb8af702a67">
</p>

<p align="center">
  <b>A cat that has been customized</b>
  <br />
  <br />
  <img src="https://github.com/user-attachments/assets/c3aa5856-ce74-47f2-ae09-3d7be481c509">
</p>

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!--FUTURE PLANS/TO-DO LIST-->
## Future Plans

- [ ] Finish making the app responsive 
- [ ] Make cat text dialogue more interesting
- [ ] Add a dark mode
- [ ] Implement outfits for the cats based on weather
- [ ] Add option to change weather data to metric system
- [ ] Make arrow keys functional for the autocomplete search
- [ ] Deploy

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
