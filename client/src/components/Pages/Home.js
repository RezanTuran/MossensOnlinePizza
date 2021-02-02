import React from 'react'
import Button from "@material-ui/core/Button";
import Carousel from '../Carousel/Carousel'
import { isMobile } from 'react-device-detect';
import useStyles from "./css/styles";
import mobileImg from '../Menu/images/pic-1.jpeg'

function Home(props) {
    const { history } = props;

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };
    const classes = useStyles()
    return (
        <div style={{ height: '100vh' }}>
            <div className={isMobile ? classes.hiddenSlide : classes.showSlide}>
                <Carousel />
            </div>
            <div className={isMobile ? classes.showImg : classes.hiddenSlide}>
                <img src={mobileImg} alt="pizzaimg" />
            </div>
            <div className={classes.transparentBackground}>
                <h1 className={isMobile ? classes.titleMobile : classes.title}>Välkommen till Mossens Pizzeria</h1>
                <p className={classes.underTitle}>Bra Ingredienser Bättre Pizza</p>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => handleButtonClick("/menu")}
                >
                    Klick för beställa
              </Button>
            </div>

        </div>

    )
}

export default Home
