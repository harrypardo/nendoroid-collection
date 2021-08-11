import { Grid } from "@material-ui/core";
import React, {FunctionComponent, useState } from "react";
import { MediaCard } from "../../components/Card";
import { StyledContainer } from "./styles";
import {SearchAppBar} from '../../components/AppBar';
import { ICollectionViewProps } from "./types";
import { isNumeric } from "../../helpers/isNumeric";


export const CollectionView: FunctionComponent<ICollectionViewProps> = ({
  figureCards,
}) => {

  const [filteredCards, setFilteredCards ] = useState(figureCards);


  const renderCards = () => {
      return filteredCards.map((card) => {
        const { name, number, url} = card;
        return(
        <Grid item key={`index-${name}-${number}`}>
        <MediaCard name ={name}
          number={number} url={url} />
        </Grid>);
      });
  }

  const handleSearchOnChange = (text: string) => {
      if(text.length < 1) {
        setFilteredCards(figureCards); 
        return;
      } 
       if(isNumeric(text)) {
        const num = parseInt(text);
        
        setFilteredCards(
          figureCards.filter((card) =>  { 
            return  parseInt(card.number) === num })
        );
        return;
      }
      const textLower = text.toLowerCase();
      setFilteredCards(
        figureCards.filter((card) => card.name.toLowerCase().includes(textLower))
      );
  } 


  return (
    <StyledContainer maxWidth={false} >
      <SearchAppBar title={"My Collection"} onChange={handleSearchOnChange}/>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {renderCards()}
      </Grid>

    </StyledContainer>
  );
};
