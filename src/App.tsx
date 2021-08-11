import React from "react";
import { CollectionView } from "./views/CollectionView/CollectionView";
import SignInSide from "./views/SignIn/SignIn";

function App() {
  const data = [
    {
      name: "Nendoroid Neko Arc : Convert! Grumbling Face Edition",
      number: "000",
      url: "https://www.goodsmile.info/en/product/3351/Nendoroid+Neko+Arc+Convert+Grumbling+Face+Edition.html",
    },
    {
      name: "Nendoroid Lazy Saber: Limited Ver.",
      number: "002",
      url: "https://www.goodsmile.info/en/product/3352/Nendoroid+Lazy+Saber+Limited+Ver.html",
    },
    {
      name: "Nendoroid Neko Arc : Convert! Mysterious Jet Flight Edition",
      number: "001",
      url: "https://www.goodsmile.info/en/product/448/Nendoroid+Neko+Arc+Convert+Mysterious+Jet+Flight+Edition.html",
    },
    {
      name: "Nendoroid Lazy Saber",
      number: "003",
      url: "https://www.goodsmile.info/en/product/569/Nendoroid+Lazy+Saber.html",
    },
    {
      name: "Nendoroid Mesousa",
      number: "004",
      url: "https://www.goodsmile.info/en/product/582/Nendoroid+Mesousa.html",
    },
    {
      name: "Nendoroid Yasagure Rin",
      number: "005",
      url: "https://www.goodsmile.info/en/product/598/Nendoroid+Yasagure+Rin.html",
    },
    {
      name: "Nendoroid Kuwagata Tsumami &amp; Joshi-chan",
      number: "007",
      url: "https://www.goodsmile.info/en/product/609/Nendoroid+Kuwagata+Tsumami+Joshi+chan.html",
    },
  ];
  return <CollectionView figureCards={data} />;
}

export default App;
