import { useContext, ChangeEvent } from "react";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "./useTheme";

const Theme = () => {
  const { t } = useTranslation();

  const { mode, setMode } = useContext(ThemeContext);

  return (
    <Switch
      inputProps={{ "aria-label": t("Navbar.theme") }}
      checked={mode === "dark"}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setMode(event.target.checked ? "dark" : "light");
      }}
    />
  );
};

export default Theme;
