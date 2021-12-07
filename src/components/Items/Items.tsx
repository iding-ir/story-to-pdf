import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { getItems } from "../../api";
import Item from "../Item/Item";
import { Styles } from "../../types";

const styles: Styles = {
  items: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  loader: {
    position: "relative",
    margin: "5rem auto",
  },
};

export interface IItem {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  content: string;
}

const Items = () => {
  const { data: items, isLoading } = useQuery("items", getItems);

  return (
    <Box sx={styles.items}>
      {isLoading ? (
        <CircularProgress sx={styles.loader} />
      ) : (
        items.map((item: IItem) => <Item key={item.id} item={item} />)
      )}
    </Box>
  );
};

export default Items;
