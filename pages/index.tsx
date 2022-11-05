import type { NextPage } from "next";
import Image from "next/image";
import { AntMotion, Typing } from "../motion-effect";

const config = [
  {
    pic: "https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png",
    // map: "https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png",
    color: "#FFF43D",
    background: "#F6B429",
  },
  {
    pic: "https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png",
    // map: "https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png",
    color: "#FF4058",
    background: "#FC1E4F",
  },
  {
    pic: "https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png",
    // map: "https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png",
    color: "#9FDA7F",
    background: "#64D487",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <AntMotion.DetailSwitch
          width={"600px"}
          height={"350px"}
          config={config}
        />
      </div>
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
