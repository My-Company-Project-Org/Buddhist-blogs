import parse, { Element } from "html-react-parser";
import Image from "next/image";

const PostBody = ({ body }: { body: string }) => {
  console.log(body); //<p><img src="https://directus-production-1e20.up.railway.app/assets/399ae852-5ca0-4475-91c1-411a09c9cf01?width=500&amp;height=333" alt="Premium Photo 1710385174243 E0d7fa4398b8"></p>
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt } = domNode.attribs;
          const imgURL = new URL(src);
          const width = imgURL.searchParams.get("width");
          const height = imgURL.searchParams.get("height");

          return (
            <Image
              className="object-cover object-center h-auto my-3 rounded-md "
              src={src}
              alt={alt}
              width={width ? parseInt(width) : undefined} // Provide default value or undefined
              height={height ? parseInt(height) : undefined} // Provide default value or undefined
            />
          );
        }
      }
    },
  };

  const getParsedHTML = (body: string) => {
    return parse(body, options);
  };

  return <div className="rich-text">{getParsedHTML(body)}</div>;
};

export default PostBody;
