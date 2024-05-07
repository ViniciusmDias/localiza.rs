import { Button, Heading, Text, styled } from "@pegasus-ui/react";

export const Container = styled("div", {
  maxWidth: "calc(100vw - (100vw - 1160px) / 2)",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  gap: "$20",
});

export const Hero = styled("div", {
  maxWidth: 480,
  padding: "0 $10",

  [`> ${Heading}`]: {
    "@media (max-width: 600px)": {
      fontSize: "$6xl",
    },
  },

  [`> ${Text}`]: {
    marginTop: "$2",
    color: "$gray200",
  },

  [`> ${Button}`]: {
    marginTop: "$2",
  },
});

export const Preview = styled("div", {
  paddingRight: "$8",
  overflow: "hidden",

  "@media (max-width: 600px)": {
    display: "none",
  },
});

export const ListContainer = styled("div", {
  maxWidth: "100vw",
  display: "flex",
  flexDirection: `column`,
  justifyContent: "space-around",
  margin: "$10 auto",
  flexWrap: "wrap",

  [`${Heading}`]: {
    width: "100%",
    textAlign: "center",
    marginBottom: "$5",
  },
});

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Input = styled("input", {
  width: "$40",
  padding: "$2",
  margin: "$4",
});

export const List = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
