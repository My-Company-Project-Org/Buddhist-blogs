import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import parse, { domToReact } from "html-react-parser";

const SingleContentDemo = ({ post }) => {
  const body = post.body;

  const options = {
    replace: (domNode) => {
      if (domNode.name === "img") {
        const { src, alt } = domNode.attribs;
        return <Image src={src} alt={alt} width={500} height={300} />;
      }
      if (domNode.name === "iframe") {
        const { src, title, width, height } = domNode.attribs;
        return (
          <div
            style={{
              position: "relative",
              paddingBottom: `${(height / width) * 100}%`,
              height: 0,
            }}
          >
            <ReactPlayer
              url={src}
              // playing={true}
              controls
              //  muted
              width="80%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </div>
        );
      }
    },
  };

  return <div>{parse(body, options)}</div>;
};

export default SingleContentDemo;
