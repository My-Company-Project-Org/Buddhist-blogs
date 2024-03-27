import parse, { Element } from "html-react-parser";
import Image from "next/image";

const PostBody = ({ body }: { body: string }) => {
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
