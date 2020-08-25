import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button as MuiButton,
  TextField,
  TextareaAutosize,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StandartContainer from "../../components/StandartContainer";

const useStyles = makeStyles((theme) => ({
  m3: {
    margin: `${theme.spacing(3)}px 0`,
    marginBottom: theme.spacing(6),
  },
  typesContainer: {
    "& > div": {
      marginBottom: theme.spacing(1),
    },
  },
  dFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    textTransform: "capitalize",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  textArea: {
    padding: theme.spacing(2),
    width: "100%",
    fontSize: "1rem",
    fontFamily: theme.typography.fontFamily,
  },
}));

const CreateGoods = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={8} xl={7}>
        <StandartContainer title="Создание товара" badge="Поставщик товара">
          <Grid container className={classes.m3}>
            <Grid item xs={10}>
              <Box mb={3}>
                <Typography variant="h6" component="h3">
                  Тип товара
                </Typography>
                <Grid container>
                  <Grid item xs={8} className={classes.typesContainer}>
                    <TextField fullWidth label="Категория" />
                    <TextField fullWidth label="Подктегория" />
                    <TextField fullWidth label="Наименование" />
                    <TextField fullWidth label="Бренд" />
                    <TextField fullWidth label="Другой бренд" />
                    <TextField fullWidth label="Стиль" />
                  </Grid>
                </Grid>
              </Box>

              <Box mb={3}>
                <div className={classes.dFlex}>
                  <Typography variant="h6" component="h3">
                    Характеристики
                  </Typography>
                  <MuiButton size="large" className={classes.btn}>
                    Добавить точку
                  </MuiButton>
                </div>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <TextField fullWidth label="Размер" />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField fullWidth label="Количество" />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth label="Адрес" />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth label="Цвет" />
                  </Grid>
                </Grid>
              </Box>

              <Box mb={3}>
                <Typography variant="h6" component="h3">
                  Описание
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={8}>
                    <TextField fullWidth label="Цена" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextareaAutosize
                      className={classes.textArea}
                      rowsMin={6}
                      placeholder="Введите текст"
                    />
                    <Box mt={1} p={2} bgcolor="text.disabled" />
                  </Grid>
                </Grid>
              </Box>

              <Box mb={3}>
                <Typography variant="h6" component="h3">
                  Особые условия
                </Typography>
                <Grid container>
                  <Grid item xs={6} container direction="column">
                    <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="Ососбое условие 1"
                    />
                    <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="Ососбое условие 2"
                    />
                    <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="Ососбое условие 3"
                    />
                    <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="Ососбое условие 4"
                    />
                  </Grid>
                  <Grid item xs={6} container direction="column">
                    <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="Ососбое условие 5"
                    />
                    <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="Ососбое условие 6"
                    />
                    <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="Ососбое условие 7"
                    />
                    <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="Ососбое условие 8"
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box mb={3}>
                <Typography variant="h6" component="h3">
                  Фотографии
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </StandartContainer>
      </Grid>
    </Grid>
  );
};

export default CreateGoods;
