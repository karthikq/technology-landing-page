/** @format */

// /** @format */

// const w = $(window).width();
// if (w < 857) {
//   let images2 = [
//     {
//       text: "THE CURIOSITY",
//       img: "./images/mobile/image-curiosity.jpg",
//     },
//     {
//       text: "DEEP EARTH  ",
//       img: "./images/mobile/image-deep-earth.jpg",
//     },
//     {
//       text: "MAKE IT FISHEYE",
//       img: "./images/mobile/image-fisheye.jpg",
//     },
//     {
//       text: "FROM UP ABOVE VR",
//       img: "./images/mobile/image-from-above.jpg",
//     },
//     {
//       text: "FROM UP ABOVE VR",
//       img: "./images/mobile/image-pocket-borealis.jpg",
//     },
//     {
//       text: "  NIGHT ARCADE",
//       img: "./images/mobile/image-night-arcade.jpg",
//     },
//     {
//       text: " SOCCER TEAM VR",
//       img: "./images/mobile/image-curiosity.jpg",
//     },
//     {
//       text: "THE GRID",
//       img: "./images/mobile/image-grid.jpg",
//     },
//   ];
//   images2.forEach((img) => {
//     let value = `
//                                 <div class="image-elements-mobile" >
//                                 <img src=${img.img} alt="">
//                                 <div class="image-items-mobile" >
//                                 <h3>${img.text}</h3>
//                                 </div>
//                                 </div>
//                                 `;
//     $(".img-mobile").append(value);
//   });
// }
// const wi = $(window).width();
// if (wi >= 857) {
//   let images = [
//     {
//       text: "THE CURIOSITY",
//       img: "./images/desktop/image-curiosity.jpg",
//     },
//     {
//       text: "DEEP EARTH  ",
//       img: "./images/desktop/image-deep-earth.jpg",
//     },
//     {
//       text: "MAKE IT FISHEYE",
//       img: "./images/desktop/image-fisheye.jpg",
//     },
//     {
//       text: "FROM UP ABOVE VR",
//       img: "./images/desktop/image-from-above.jpg",
//     },
//     {
//       text: "FROM UP ABOVE VR",
//       img: "./images/desktop/image-pocket-borealis.jpg",
//     },
//     {
//       text: "  NIGHT ARCADE",
//       img: "./images/desktop/image-night-arcade.jpg",
//     },
//     {
//       text: " SOCCER TEAM VR",
//       img: "./images/desktop/image-soccer-team.jpg",
//     },
//     {
//       text: "THE GRID",
//       img: "./images/desktop/image-grid.jpg",
//     },
//   ];
//   images.forEach((img) => {
//     let valur = `
//                                                                       <div class="image-elements" >
//                                                                       <img src=${img.img} alt="">
//                                                                       <div class="image-items" >
//                                                                       <h3>${img.text}</h3>
//                                                                       </div>
//                                                                       </div>
//                                                                       `;
//     $(".img").append(valur);
//   });
// }

//
// window.onresize = (e) => {
//   const width = e.target.outerWidth;

//   if (width < 857) {
//     let images2 = [
//       {
//         text: "THE CURIOSITY",
//         img: "./images/mobile/image-curiosity.jpg",
//       },
//       {
//         text: "DEEP EARTH  ",
//         img: "./images/mobile/image-deep-earth.jpg",
//       },
//       {
//         text: "MAKE IT FISHEYE",
//         img: "./images/mobile/image-fisheye.jpg",
//       },
//       {
//         text: "FROM UP ABOVE VR",
//         img: "./images/mobile/image-from-above.jpg",
//       },
//       {
//         text: "FROM UP ABOVE VR",
//         img: "./images/mobile/image-pocket-borealis.jpg",
//       },
//       {
//         text: "  NIGHT ARCADE",
//         img: "./images/mobile/image-night-arcade.jpg",
//       },
//       {
//         text: " SOCCER TEAM VR",
//         img: "./images/mobile/image-curiosity.jpg",
//       },
//       {
//         text: "THE GRID",
//         img: "./images/mobile/image-grid.jpg",
//       },
//     ];
//     images2.forEach((img) => {
//       let value = `
//                                   <div class="image-elements-mobile" >
//                                   <img src=${img.img} alt="">
//                                   <div class="image-items-mobile" >
//                                   <h3>${img.text}</h3>
//                                   </div>
//                                   </div>
//                                   `;
//       $(".img-mobile").append(value);
//     });
//   }
// };

// window.onresize = (e) => {
//   const widths = e.target.outerWidth;

//   if (widths >= 857) {
//     let images2 = [
//       {
//         text: "THE CURIOSITY",
//         img: "./images/mobile/image-curiosity.jpg",
//       },
//       {
//         text: "DEEP EARTH  ",
//         img: "./images/mobile/image-deep-earth.jpg",
//       },
//       {
//         text: "MAKE IT FISHEYE",
//         img: "./images/mobile/image-fisheye.jpg",
//       },
//       {
//         text: "FROM UP ABOVE VR",
//         img: "./images/mobile/image-from-above.jpg",
//       },
//       {
//         text: "FROM UP ABOVE VR",
//         img: "./images/mobile/image-pocket-borealis.jpg",
//       },
//       {
//         text: "  NIGHT ARCADE",
//         img: "./images/mobile/image-night-arcade.jpg",
//       },
//       {
//         text: " SOCCER TEAM VR",
//         img: "./images/mobile/image-curiosity.jpg",
//       },
//       {
//         text: "THE GRID",
//         img: "./images/mobile/image-grid.jpg",
//       },
//     ];
//     images2.forEach((img) => {
//       let value = `
//                                                 <div class="image-elements-mobile" >
//                                                 <img src=${img.img} alt="">
//                                                 <div class="image-items-mobile" >
//                                                 <h3>${img.text}</h3>
//                                                 </div>
//                                                 </div>
//                                                 `;
//       $(".img-mobile").append(value);
//     });
//   }
// };

document.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 300) {
    $(".line").css("backgroundColor", "white");
  } else {
    $(".line").css("backgroundColor", "white");
  }
});
$(".nav-icon ").on("click", () => {
  $(".line").toggleClass("active");

  $(".nav").toggleClass("nav-active");

 

  let nav = document.querySelector(".nav");
  let value = nav.classList.contains("nav-active");
  if (value) {
    $(".contents-two").on("click", () => {
      $(".nav").removeClass("nav-active");
      $(".line").removeClass("active");
    });
  }
});
