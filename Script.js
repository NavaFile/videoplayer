// console.log("test");
// let myPlayer;
// let myPlayer2;
// let videoNumber = 1;
// let videoTime = 0;
// window.onload = function() {
//   if (document.getElementById("vid1")) {
//     videojs("vid1").ready(function() {
//       myPlayer = this;
//       // var player = videojs('myPlayer', options);

//       myPlayer.on("seeking", function(event) {
//         if (currentTime < myPlayer.currentTime()) {
//           myPlayer.currentTime(currentTime);
//         }
//       });

//       myPlayer.on("seeked", function(event) {
//         if (currentTime < myPlayer.currentTime()) {
//           myPlayer.currentTime(currentTime);
//         }
//       });

//       setInterval(function() {
//         if (!myPlayer.paused()) {
//           currentTime = myPlayer.currentTime();
//         }
//       }, 1000);

//       myPlayer.on("timeupdate", function() {
//         videoTime = myPlayer.currentTime();
//         if (myPlayer.currentTime() / myPlayer.duration() > 0.998) {
//           const videoSrcs = [
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/Time-Lapse-Video-of-Tall-Buildings.mp4",
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/Pexels-Videos-1645926.mp4",
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/video-2.mp4",
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/video-1-1.mp4",
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/Pexels-Vides-1645926.mp4"
//           ];
//           console.log(document.getElementById("videoSrc1"));
//           const src = document.getElementById("videoSrc1").getAttribute("src");
//           let number = 0;
//           for (let i = 0; i < videoSrcs.length; i++) {
//             if (videoSrcs[i] === src) {
//               number = i;
//               console.log("match");
//             }
//           }
//           videoNumber = number + 2;
//           if (number + 1 !== 4) {
//             document.getElementById((number + 2).toString()).style.opacity = 0;
//             document
//               .getElementById("videoSrc1")
//               .setAttribute("src", videoSrcs[number + 1]);
//           } else {
//             document.getElementById((number + 2).toString()).style.opacity = 0;
//           }
//           videoTime = 0;
//           myPlayer.load();
//         }
//       });

//       document.addEventListener("visibilitychange", function() {
//         myPlayer.pause();
//       });
//     });
//   }
//   document.getElementById("signin").onclick = function() {
    
//     localStorage.setItem("email", document.getElementById("emailInput").value);

//     $('#exampleModal').modal('hide'); 
// $('body').removeClass('modal-open');
// $('body').css('padding-right', '0px');
// $('.modal-backdrop').remove();
//   };

//   document.getElementById("closemodal").onclick = function() {
//     myPlayer.pause();
//     const requestObj = {
//       email: localStorage.getItem("email"),
//       moduleNumber: 1,
//       videoNumber: videoNumber,
//       videoTime: videoTime
//     };

//     console.log(requestObj);
//   };
// };
//   //Mobile Player
//   if (document.getElementById("vid2")) {
//     videojs("vid2").ready(function() {
//       myPlayer2 = this;
//       // var player = videojs('myPlayer', options);

//       myPlayer2.on("seeking", function(event) {
//         if (currentTime < myPlayer2.currentTime()) {
//           myPlayer2.currentTime(currentTime);
//         }
//       });

//       myPlayer2.on("seeked", function(event) {
//         if (currentTime < myPlayer2.currentTime()) {
//           myPlayer2.currentTime(currentTime);
//         }
//       });

//       setInterval(function() {
//         if (!myPlayer2.paused()) {
//           currentTime = myPlayer2.currentTime();
//         }
//       }, 1000);

//       myPlayer2.on("timeupdate", function() {
//         videoTime = myPlayer2.currentTime();
//         if (myPlayer2.currentTime() / myPlayer2.duration() > 0.998) {
//           const videoSrcs = [
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/Time-Lapse-Video-of-Tall-Buildings.mp4",
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/Pexels-Videos-1645926.mp4",
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/video-2.mp4",
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/video-1-1.mp4",
//             "https://dev.globalxchange.com/wp-content/uploads/2020/02/Pexels-Vides-1645926.mp4"
//           ];
//           console.log(document.getElementById("videoSrc2"));
//           const src = document.getElementById("videoSrc2").getAttribute("src");
//           let number = 0;
//           for (let i = 0; i < videoSrcs.length; i++) {
//             if (videoSrcs[i] === src) {
//               number = i;
//               console.log("match");
//             }
//           }
//           videoNumber = number + 2;
//           if (number + 1 !== 4) {
//             document.getElementById((number + 2).toString()).style.opacity = 0;
//             document
//               .getElementById("videoSrc2")
//               .setAttribute("src", videoSrcs[number + 1]);
//           } else {
//             document.getElementById((number + 2).toString()).style.opacity = 0;
//           }
//           videoTime = 0;
//           myPlayer2.load();
//         }
//       });

//       document.addEventListener("visibilitychange", function() {
//         myPlayer2.pause();
//       });
//     });
//   }

//   document.getElementById("signin").onclick = function() {
    
//     localStorage.setItem("email", document.getElementById("emailInput").value);

    
//   };

//   document.getElementById("closemodal1").onclick = function() {
//     myPlayer.pause();
//     const requestObj = {
//       email: localStorage.getItem("email"),
//       moduleNumber: 1,
//       videoNumber: videoNumber,
//       videoTime: videoTime
//     };

//     console.log(requestObj);
//   };

// //Email Script


console.log('test');
let myPlayer;
let videoNumber = 1;
let videoTime = 0;
window.onload = function() {
  if (document.getElementById('vid1')) {
    videojs('vid1').ready(function() {
      myPlayer = this;
      // var player = videojs('myPlayer', options);

      myPlayer.on('seeking', function(event) {
        if (currentTime < myPlayer.currentTime()) {
          myPlayer.currentTime(currentTime);
        }
      });

      myPlayer.on('seeked', function(event) {
        if (currentTime < myPlayer.currentTime()) {
          myPlayer.currentTime(currentTime);
        }
      });

      setInterval(function() {
        if (!myPlayer.paused()) {
          currentTime = myPlayer.currentTime();
        }
      }, 1000);

      myPlayer.on('timeupdate', function() {
        videoTime = myPlayer.currentTime();
        if (myPlayer.currentTime() / myPlayer.duration() > 0.998) {
          const videoSrcs = [
            'https://dev.globalxchange.com/wp-content/uploads/2020/02/Time-Lapse-Video-of-Tall-Buildings.mp4',
            'https://dev.globalxchange.com/wp-content/uploads/2020/02/Pexels-Videos-1645926.mp4',
            'https://dev.globalxchange.com/wp-content/uploads/2020/02/video-2.mp4',
            'https://dev.globalxchange.com/wp-content/uploads/2020/02/video-1-1.mp4',
            'https://dev.globalxchange.com/wp-content/uploads/2020/02/Pexels-Vides-1645926.mp4'
          ];
          console.log(document.getElementById('videoSrc1'));
          const src = document.getElementById('videoSrc1').getAttribute('src');
          let number = 0;
          for (let i = 0; i < videoSrcs.length; i++) {
            if (videoSrcs[i] === src) {
              number = i;
              console.log('match');
            }
          }
          videoNumber = number + 2;
          if (number + 1 !== 4) {
            document.getElementById((number + 2).toString()).style.opacity = 0;
            document
              .getElementById('videoSrc1')
              .setAttribute('src', videoSrcs[number + 1]);
          } else {
            document.getElementById((number + 2).toString()).style.opacity = 0;
          }
          videoTime = 0;
          myPlayer.load();
        }
      });

      document.addEventListener('visibilitychange', function() {
        myPlayer.pause();
      });
    });
  }

  document.getElementById('signin').onclick = function() {
    localStorage.setItem('email', document.getElementById('emailInput').value);
  };

  document.getElementById('closemodal').onclick = function() {
    myPlayer.pause();
    const requestObj = {
      email: localStorage.getItem('email'),
      moduleNumber: 1,
      videoNumber: videoNumber,
      videoTime: videoTime
    };

    console.log(requestObj);
  };
};
