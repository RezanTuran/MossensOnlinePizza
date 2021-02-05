import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  hiddenSlide: {
    display: 'none'
  },
  showSlide: {
    display: 'block'
  },
  transparentBackground: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'relative',
    top: '-71.8em',
    height: '1000px'
  },
  transparentBackgroundMobile:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'relative',
    top: '-71.8em',
    height: '71vh'
  },
  title: {
    fontFamily: 'Tangerine,cursive',
    fontSize: '100px',
    fontWeight: '400',
    lineHeight: '40px',
    color: '#f5deb3'
  },
  titleMobile: {
    fontFamily: 'Tangerine,cursive',
    fontSize: '30px',
    fontWeight: '400',
    lineHeight: '40px',
    color: '#f5deb3'
  },
  underTitle: {
    color: 'white',
    fontSize:'20px',
    marginBottom :'30px',
    marginTop:'10px',
    padding:'0 30px'
  },
  mobileImg: {
    width: '100%',
    height: '70vh'
  },
  showImg: {
    height: '1000px'
  },
  buttonColor:{
    backgroundColor: '#9d0606',
    padding: '1em'
  }
}));
