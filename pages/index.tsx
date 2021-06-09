import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.h1
          animate="end"
          initial="start"
          variants={{
            start: { x: -100 },
            end: { x: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          Sass Mixins
        </motion.h1>
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
        <motion.div
          className="app__container--profile-image"
          animate="visible"
          initial="hidden"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <motion.img
            animate="end"
            initial="start"
            variants={{
              start: { y: 10, opacity: 0 },
              end: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 1 }}
            src="/Me.png"
            alt="Me"
            width="400px"
            height="600px"
          />
          <motion.div
            animate="end"
            initial="start"
            variants={{
              start: { y: 10, opacity: 0 },
              end: { y: 0, opacity: 1 },
            }}
            transition={{ delay: 0.5 }}
            className="bg-box"
          ></motion.div>
        </motion.div>
        <h5>Say Hello</h5>
      </div>
    </div>
  );
}
