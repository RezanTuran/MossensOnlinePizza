import React from 'react'
import Button from "@material-ui/core/Button";
import Carousel from '../Carousel/Carousel'
import { isMobile } from 'react-device-detect';
import useStyles from "./css/styles";
import mobileImg from '../Menu/images/pic-1.jpeg'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import { Helmet } from "react-helmet";

function Home(props) {
    const { history } = props;

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };
    const classes = useStyles()
    return (
        <>
            <Helmet>
                <title>Mossens Pizzeria</title>
            </Helmet>
            <div>
                <div className={isMobile ? classes.hiddenSlide : classes.showSlide}>
                    <Carousel />
                </div>
                <div className={isMobile ? classes.showImg : classes.hiddenSlide}>
                    <img src={mobileImg} className={classes.mobileImg} alt="pizzaimg" />
                </div>
                <div className={isMobile ? classes.transparentBackgroundMobile : classes.transparentBackground}>
                    <h1 className={isMobile ? classes.titleMobile : classes.title}>Välkommen till Mossens Pizzeria</h1>
                    <p className={classes.underTitle}>Bra Ingredienser Bättre Pizza</p>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => handleButtonClick("/menu")}
                        endIcon={<LocalPizzaIcon />}
                        className={classes.buttonColor}
                    >
                        Klick för beställa
              </Button>
                </div>
            </div>
            {/* <div style={{ backgroundColor: 'red', display: 'flex', justifyContent: 'center', marginTop: '-72em', height: '100vh' }}>
                <div style={{ height: '10em', width: '100%', backgroundColor: 'black', margin: "5px" }}>
                </div>
                <div style={{ height: '10em', width: '100%', backgroundColor: 'black', margin: "5px" }}>2</div>
                <div style={{ height: '10em', width: '100%', backgroundColor: 'black', margin: "5px" }}>3</div>
                <div style={{ height: '10em', width: '100%', backgroundColor: 'black', margin: "5px" }}>4</div>
            </div> */}
        </>

    )
}

export default Home
