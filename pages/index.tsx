import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Album } from "../motion-effect";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Album
      text={
        <div style={{ color: "#fff", fontSize: "1.5rem" }}>
          {"This is a text!"}
        </div>
      }
      subText={<div style={{ color: "#fff" }}>{"This is a **subText**!"}</div>}
    >
      <div
        style={{
          width: "500px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "2rem" }}>Title</div>
      </div>
    </Album>
  );
};

export default Home;
