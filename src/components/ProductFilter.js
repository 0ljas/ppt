import React from "react";
import {
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  filter: {
    padding: theme.spacing(2),
    minHeight: 600,
    display: "flex",
    flexDirection: "column",
  },
  filterTitle: {
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  accordionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
  },
  btn: {
    marginTop: theme.spacing(2),
    width: "100%",
    borderWidth: 2,
    borderColor: "inherit",
    borderRadius: 0,
    fontStyle: "oblique",
  },
}));

const ProductFilter = () => {
  const classes = useStyles();

  return (
    <Paper square elevation={6} className={classes.filter}>
      <Typography variant="h6" component="p" className={classes.filterTitle}>
        ФИЛЬТР ПОИСКА:
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="panel1a-header">
          <Typography className={classes.accordionHeading}>
            Категории
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="panel2a-header">
          <Typography className={classes.accordionHeading}>Бренд</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="panel3a-header">
          <Typography className={classes.accordionHeading}>Размер</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="panel4a-header">
          <Typography className={classes.accordionHeading}>Цвет</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="panel5a-header">
          <Typography className={classes.accordionHeading}>Условия</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="panel6a-header">
          <Typography className={classes.accordionHeading}>Цена</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box px={2} mt="auto">
        <Button
          type="submit"
          size="large"
          variant="outlined"
          className={classes.btn}
        >
          ОТФИЛЬТРОВАТЬ ТОВАРЫ
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductFilter;
