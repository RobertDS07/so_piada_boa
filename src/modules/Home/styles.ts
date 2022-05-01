import { CSSObject } from "@chakra-ui/react";

export const scrollbarStyle: CSSObject = {
  "&": {
    overflowY: "overlay",
  },

  "&::-webkit-scrollbar": {
    width: "30px",
  },

  "&::-webkit-scrollbar-thumb": {
    borderRadius: "18px",
    backgroundColor: "red.main",
    backgroundClip: "padding-box",
    border: "10px solid transparent",
  },
};
