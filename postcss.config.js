import purgecss from "@fullhuman/postcss-purgecss";
import cssnano from "cssnano";

const produccion = process.env.NODE_ENV === "production";

export default {
  plugins: produccion
    ? [
        purgecss({
          content: ["./index.html", "./src/**/*.js"],
          fontFace: false,
          keyframes: true,
          variables: true,
        }),
        cssnano({ preset: "default" }),
      ]
    : [],
};
