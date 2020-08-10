import React from "react";
import {
  Paper,
  Typography,
  Select,
  MenuItem,
  Divider,
  Box,
  Toolbar,
  Button,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sortContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  sortHeading: {
    paddingRight: theme.spacing(1),
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
  },
  menuItem: {
    minWidth: 180,
    padding: `0 ${theme.spacing(1)}px`,
    fontSize: theme.typography.pxToRem(15),
    fontStyle: "oblique",
  },
  input: {
    width: 100,
    padding: `0 ${theme.spacing(1)}px`,
  },
}));

const ProductSort = () => {
  const classes = useStyles();
  const [sortType, setSortType] = React.useState("");

  const handleChange = (event) => {
    setSortType(event.target.value);
  };

  return (
    <Paper square elevation={6} className={classes.sortContainer}>
      <Toolbar>
        <Typography className={classes.sortHeading}>Сортировать по:</Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          displayEmpty
          disableUnderline
          onChange={handleChange}
          className={classes.menuItem}
        >
          <MenuItem value={10} className={classes.menuItem}>
            Сначало дорогие
          </MenuItem>
          <MenuItem value={20} className={classes.menuItem}>
            Сначало дешевые
          </MenuItem>
        </Select>
        <Divider variant="middle" orientation="vertical" flexItem />
        <Typography className={classes.sortHeading}>Цена:</Typography>
        <Input className={classes.input} placeholder="Мин. цена" /> {" - "}
        <Input className={classes.input} placeholder="Макс. цена" />
        <Divider variant="middle" orientation="vertical" flexItem />
      </Toolbar>
      <Box ml="auto">
        <Button>Очистить все</Button>
      </Box>
    </Paper>
  );
};

export default ProductSort;
