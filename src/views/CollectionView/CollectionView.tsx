import { Grid } from "@material-ui/core";
import React from "react";
import { MediaCard } from "../../components/Card";
import { StyledContainer } from "./styles";
import {SearchAppBar} from '../../components/AppBar';

export const CollectionView = () => {
  return (
    <StyledContainer maxWidth={false} >
      <SearchAppBar title={"My Collection"} />
      <br />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <MediaCard name ={ "Nendoroid Giorno"}
                             number={ "10"} url={"https://www.goodsmile.info/en/product/8432/Nendoroid+Giorno+Giovanna.html"} />
        </Grid>

      </Grid>

      
    </StyledContainer>
  );
};
