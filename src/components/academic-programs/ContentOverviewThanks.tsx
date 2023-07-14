import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  ListItemText,
  Box,
} from "@mui/material";
import { ProgramItem } from "@/interfaces";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";

interface Props {
  program: ProgramItem;
}
export const ContentOverviewThanks = ({ program }: Props) => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      paddingLeft={2}
      paddingY={{ xs: 5, sm: 5 }}
      paddingX={10}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      // sx={{ backgroundColor: 'red' }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h2"
          color="primary"
          fontWeight="bold"
          fontSize={{ xs: 20, sm: 30, xl: 45 }}
          textAlign="center"
        >
          {t("thanks.title1")}
        </Typography>
        <Typography
          variant="h2"
          color="white"
          fontWeight="bold"
          fontSize={{ xs: 20, sm: 30, xl: 45 }}
          textAlign="center"
        >
          {t("thanks.title2")}
        </Typography>
      </Grid>
    </Grid>
  );
};
