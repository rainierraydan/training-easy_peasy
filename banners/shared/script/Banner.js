// import fitText from '@mediamonks/display-temple/util/fitText';
import politeLoadImages from '@mediamonks/display-temple/util/politeLoadImages';
const WebFont = require('webfontloader');


export default class Banner {

  constructor(config) {
    // add required components here
    this.config = config;
    this.size = config.content.size;
  }

  // fontLoading module for the lazy loading of fonts - default is openSans
  async loadFonts() {
    let webFontConfig = {}

    webFontConfig = {
      custom: {
        families: this.config.content.defaultFonts,
        urls: [this.config.content.defaultFontUrl]
      }
    }

    webFontConfig.fontactive = (e) => {
      // console.log(`${e}, was detected. The document is ready and font loading is active`)
    }

    const prom = new Promise(resolve => {
      webFontConfig.active = resolve
    });

    WebFont.load(webFontConfig);
    return prom;
  }

  async init() {
    this.banner = document.body.querySelector('.banner');
    await politeLoadImages(this.banner)
    await this.loadFonts(); //need to wait until fonts are loaded. Otherwise we will run fitText on the wrong fonts

    // const title = document.body.querySelector('.title');
    // const ctaCopy = document.body.querySelector('.cta_copy');
    // fitText([title, ctaCopy]);

    this.domMainExit = document.body.querySelector('.mainExit');

    this.domMainExit.addEventListener('click', this.handleClick);
    // this.domMainExit.addEventListener('mouseover', this.handleRollOver);
    // this.domMainExit.addEventListener('mouseout', this.handleRollOut);
  }

  setAnimation(animation){
    this.animation = animation;
    //creates new timeline and pauses it
    this.animation.getTimeline().paused(true);
    this.animation.getTimeline().eventCallback('onComplete', this.handleAnimationComplete);
  }

  handleAnimationComplete = () => {
    this.domMainExit.addEventListener('mouseover', this.handleRollOver);
    this.domMainExit.addEventListener('mouseout', this.handleRollOut);
  }

  handleExit = () => {
    window.open(window.clickTag, '_blank');
    this.animation.getTimeline().progress(1);
  };

  /**
   * When client clicks this function will be triggerd.
   */
  handleClick = () => {
    this.handleExit();
  };

  /**
   * When mouse rolls over unit.
   */
  handleRollOver = () => {
    // console.log('in')
    if(this.size == '300x250'){
      gsap.to('.ctaBg1', {duration:.3, opacity:0})
      gsap.to('.ctaBg2', {duration:.3, opacity:1})
    }
    gsap.to('.product, .ctaBg1, .ctaBg2', {duration:.3, scale:'+=.05'})
  };
  
  /**
   * When mouse rolls out unit.
  */
 handleRollOut = () => {
  // console.log('out')
  if(this.size == '300x250'){
    gsap.to('.ctaBg1', {duration:.3, opacity:1})
    gsap.to('.ctaBg2', {duration:.3, opacity:0})
  }
   gsap.to('.product, .ctaBg1, .ctaBg2', {duration:.3, scale:'-=.05'})
  };

  start() {
    this.animation.play();
  }
}

