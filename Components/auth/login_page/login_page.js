"use client";

import Image from "next/image";
import React from "react";
import styles from "./login_page.module.css";
import { initFirebase } from "@/Firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function LoginComponent() {
  // intialize firebase
  const app = initFirebase();

  // initialize firebase auth
  const auth = getAuth();

  return (
    <div className={styles.top_parent_container}>
      <Image
        className={styles.logo}
        src="/images/logo/company_logo.png"
        alt="loading_screen"
        height="500"
        width="500"
      ></Image>
      {/* ONLY DIPLAYED FOR Mobiles */}

      <div className={styles.art_work_container}></div>

      {/* image container */}
      <div className={styles.image_container}>
        <Image
          className={styles.dish_image_style}
          src="/images/login_page_images/daal_4k.jpg"
          alt="login_page"
          width={1500}
          height={1500}
          priority={true}
        ></Image>
      </div>

      <section className={styles.info}>
        <h1 className={styles.app_name}>MESS MENU</h1>
        <p className={styles.p1}>
          Vote for your favourite dishes and help them serve you better.
        </p>
        <p className={styles.p2}>Login to get started.</p>
        <GoogleButton />
      </section>
    </div>
  );

  function GoogleButton() {
    async function signInWithGoogle() {
      // sign in with google

      // initialize google auth provider
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
    }
    return (
      <div className={styles.google_button_container}>
        <div className={styles.google_button} onClick={signInWithGoogle}>
          <Image
            className={styles.google_logo}
            src="/images/login_page_images/google_logo.svg"
            alt="google sign-in button"
            width={30}
            height={30}
          ></Image>
          <p className={styles.google_button_text}>Sign in with Google</p>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
