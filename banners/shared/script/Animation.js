import FrameAnimation from "@mediamonks/display-temple/animation/FrameAnimation"

export default class Animation extends FrameAnimation {
  /**
   *
   * @param {HTMLDivElement} container
   * @param {null} config
   */
  constructor(container, config) {
    super();

    this.container = container;
    this.config = config;

    this.copyObj = config.content.copy1;
    this.w = config.settings.size.width;
    this.h = config.settings.size.height;
    this.size = config.content.size;
    // console.log(this.copyObj)
    //SET Purple vector line offset and dash to animate drawing effect
    // let path = document.querySelector('#framePath');
    // let pathLength = path.getTotalLength();
    // path.style.strokeDasharray = pathLength;
    // path.style.strokeDashoffset = pathLength;

  }

  /**
   *
   * @param {gsap.core.Timeline} tl
   */
    frame0(tl){
      tl.add('frame0', 0)
      tl.to('.content', {duration:1, opacity: 1}, 'frame0')
    }

    frame1(tl){
      tl.add('frame1', 'frame0+=.2')
      tl.from('.product', {duration:1.8, scale: 1.2, ease: "power4.out"}, 'frame1')
      tl.from('.product', {duration:.5, opacity:0}, 'frame1')
      // for (let key in this.copyObj) {
        //   tl.from('.talent', {duration:6, scale: 1.15}, 'frame1')
        // }
      }
      
    frame2(tl){
      tl.add('frame2', 'frame1+=1.4')
      switch (this.size) {
        case '300x600':
          tl.to('.solid', {duration:.5, y:203, ease: "power1.out"}, 'frame2')
          tl.to('.product', {duration:.5, y:235, x:90, scale: .8, ease: "power1.out"}, 'frame2')
          tl.from('.legal', {duration:.3, opacity:0}, 'frame2+=.1')
        break;
        case '728x90':
          tl.to('.solid', {duration:.5, x:245, ease: "power1.out"}, 'frame2')
          tl.to('.product', {duration:.5, x:474, scale: 1, ease: "power4.out"}, 'frame2')
          tl.from('.legal', {duration:.3, opacity:0}, 'frame2+=.1')
        break;
        case '300x250':
          tl.to('.solid', {duration:.5, y:this.h, ease: "power1.out"}, 'frame2')
          tl.to('.product', {duration:.5, y:90, x:90, scale: .8, ease: "power1.out"}, 'frame2')
        break;
        case '320x50':
          tl.to('.product', {duration:.5, x:265, scale: .8, ease: "power1.out"}, 'frame2')
          tl.from('.legal', {duration:.3, opacity:0}, 'frame2+=.35')
        break;
        case '300x50':
          tl.to('.product', {duration:.5, x:260, scale: .8, ease: "power1.out"}, 'frame2')
          tl.from('.legal', {duration:.3, opacity:0}, 'frame2+=.1')
        break;
      }
      tl.from('.talent', {duration:3, scale: 1.15, ease: "power1.out"}, 'frame2')
      tl.from('.copy1', {duration:.3, opacity:0, x: -10, stagger:.18, ease:"power1.out"}, 'frame2+=.3')
      tl.from('.ctaBg1', {duration:.3, opacity:0, y: -10, ease:"power1.out"}, 'frame2+=1')
      tl.from('.copy2', {duration:.3, opacity:0, x: -10, ease:"power1.out"}, 'frame2+=1.25')
  }

}
