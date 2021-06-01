import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleTheme() {
    document.body.classList.toggle("dark");
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className="app__container">
      <Head>
        <title>Sass Mixins</title>
      </Head>
      <div className="app__container--header">
        <h1>Sass Mixins</h1>
        <button onClick={toggleTheme}>
          <img src="/dark-mode.svg" alt="Dark Mode" />
        </button>
      </div>
      <p>
        Mixins allow you to define styles that can be re-used throughout your
        stylesheet. They make it easy to avoid using non-semantic classes like
        .float-left, and to distribute collections of styles in libraries.
      </p>

      <div className="app__container--profile">
        <div className="app__container--profile-image">
          <img src="/Me.png" alt="Me" width="400px" height="600px" />
          <div className="bg-box"></div>
        </div>
        <h5>Say Hello</h5>
      </div>
    </div>
  );
}
