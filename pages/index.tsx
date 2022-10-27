import type { NextPage } from "next";
import Image from "next/image";
import { Album, Typing } from "../motion-effect";

const Home: NextPage = () => {
  return (
    <>
      <Album
        style={{ margin: "8px" }}
        duration={0.4}
        text={
          <div style={{ color: "#fff", fontSize: "1.3rem" }}>
            {"Umi4 正式版发布"}
          </div>
        }
        tag={"推广"}
        subText={
          <div style={{ color: "#fff", fontSize: "8px" }}>
            {"Umi4现在可以在npm上使用了!"}
          </div>
        }
      >
        <Image
          src="https://gw.alipayobjects.com/zos/bmw-prod/5741382d-cc22-4ede-b962-aea287a1d1a1/l4nq43o8_w2646_h1580.png"
          alt="Umi 4 正式版发布"
          width={650}
          height={380}
        />
      </Album>
      <Typing
        text={"Hello, I am Tohsaka888!"}
        speed={5}
        conatinerStyle={{ display: "flex", alignItems: "flex-end" }}
        textStyle={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}
        cursor={
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bolder",
              marginBottom: "2px",
            }}
          >
            |
          </div>
        }
      />
    </>
  );
};

export default Home;
