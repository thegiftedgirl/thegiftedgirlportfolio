
// const video = intro.querySelector('video');
// const text = intro.querySelector('h1');

// const section = document.querySelector('section');
// const end = section.querySelector('h1');


// const controller = new ScrollMagic.Controller();
// //scenes
// let scene = new ScrollMagic.Scene({
//     duration: 5000,
//     triggerElement: intro,
//     triggerHook: -0.1
    
// })

// .setPin(intro)
// .addTo(controller);

// //Text Animation
// const textAnim = TweenMax.fromTo(text, 4, { opacity: 1}, { opacity: 0 });
 
// let scene2 = new ScrollMagic.Scene({
//     duration: 5000,
//     triggerElement: intro,
//     triggerHook: 0
// })
// .setTween(textAnim)
// .addTo(controller);
// //animation
// let accelamount = 0.9;
// let scrollpos = 0;
// let delay = 0;

// scene.on("update", e => {
//     scrollpos = e.scrollPos / 1000 ;
  
// });

// setInterval(() => {
//     delay += (scrollpos - delay) * accelamount;
   

//     video.currentTime = scrollpos;
// }, -33.3);



// new fullpage('#fullpage',{
//     autoScrolling: true,
//     navigation: true, 
// });