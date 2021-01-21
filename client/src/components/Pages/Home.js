import React from 'react'
import Button from "@material-ui/core/Button";
import Carousel from '../Carousel/Carousel'
import { isMobile } from 'react-device-detect';
import useStyles from "./css/styles";

function Home(props) {
    const { history } = props;

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };
    const classes = useStyles()
    return (
        <div>
            <div className={isMobile ? classes.hiddenSlide : classes.showSlide}>
                <Carousel />
            </div>
            <div>
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
