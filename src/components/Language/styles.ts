import { Styles } from "../../types";

export const styles: Styles = {
  language: {
    width: "150px",
  },
  select: {
    div: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      minWidth: "unset",
      padding: "0.2rem",
      color: "secondary.main",

      svg: {
        width: "32px",
        height: "32px",
      },
    },
  },
  icon: {
    marginRight: "0.5rem",
    padding: "0.2rem",
  },
  text: {
    color: "text.primary",
    padding: "0.2rem",
  },
};
