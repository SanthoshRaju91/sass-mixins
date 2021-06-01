import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="app__container">
      <Head>
        <title>Sass Mixins</title>
      </Head>
      <h1>Sass Mixins</h1>
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
