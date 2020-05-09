
// // console.log('test');
// // let myPlayer;
// // let videoNumber = 1;
// // let videoTime = 0;
// // window.onload = function() {
// //   if (document.getElementById('vid1')) {
// //     videojs('vid1').ready(function() {
// //       myPlayer = this;
// //       // var player = videojs('myPlayer', options);

// //       myPlayer.on('seeking', function(event) {
// //         if (currentTime < myPlayer.currentTime()) {
// //           myPlayer.currentTime(currentTime);
// //         }
// //       });

// //       myPlayer.on('seeked', function(event) {
// //         if (currentTime < myPlayer.currentTime()) {
// //           myPlayer.currentTime(currentTime);
// //         }
// //       });

// //       setInterval(function() {
// //         if (!myPlayer.paused()) {
// //           currentTime = myPlayer.currentTime();
// //         }
// //       }, 1000);

// //       myPlayer.on('timeupdate', function() {
// //         videoTime = myPlayer.currentTime();
// //         if (myPlayer.currentTime() / myPlayer.duration() > 0.998) {
// //           const videoSrcs = [
// //             'https://dev.globalxchange.com/wp-content/uploads/2020/02/Time-Lapse-Video-of-Tall-Buildings.mp4',
// //             'https://dev.globalxchange.com/wp-content/uploads/2020/02/Pexels-Videos-1645926.mp4',
// //             'https://dev.globalxchange.com/wp-content/uploads/2020/02/video-2.mp4',
// //             'https://dev.globalxchange.com/wp-content/uploads/2020/02/video-1-1.mp4',
// //             'https://dev.globalxchange.com/wp-content/uploads/2020/02/Pexels-Vides-1645926.mp4'
// //           ];
// //           console.log(document.getElementById('videoSrc1'));
// //           const src = document.getElementById('videoSrc1').getAttribute('src');
// //           let number = 0;
// //           for (let i = 0; i < videoSrcs.length; i++) {
// //             if (videoSrcs[i] === src) {
// //               number = i;
// //               console.log('match');
// //             }
// //           }
// //           videoNumber = number + 2;
// //           if (number + 1 !== 4) {
// //             document.getElementById((number + 2).toString()).style.opacity = 0;
// //             document
// //               .getElementById('videoSrc1')
// //               .setAttribute('src', videoSrcs[number + 1]);
// //           } else {
// //             document.getElementById((number + 2).toString()).style.opacity = 0;
// //           }
// //           videoTime = 0;
// //           myPlayer.load();
// //         }
// //       });

// //       document.addEventListener('visibilitychange', function() {
// //         myPlayer.pause();
// //       });
// //     });
// //   }

// //   document.getElementById('signin').onclick = function() {
// //     localStorage.setItem('email', document.getElementById('emailInput').value);
// //   };

// //   document.getElementById('closemodal').onclick = function() {
// //     myPlayer.pause();
// //     const requestObj = {
// //       email: localStorage.getItem('email'),
// //       moduleNumber: 1,
// //       videoNumber: videoNumber,
// //       videoTime: videoTime
// //     };

// //     console.log(requestObj);
// //   };
// // };
// // Get Method It IS Working

// function LoadCryptoData() {
//   console.log("LOAd cryptoo data");

//   axios({
//     url:
//       "https://comms.globalxchange.com/coin/promo/farm/payout/quote/get?campaign_id=gxcom_gxt&video_no=1",
//     method: "get",
//   })
//     .then((result) => {
//       console.log(result.data);

//       console.log("The Crypto Data is :", result.data.status);
//       document.getElementById(
//         "payout"
//       ).innerHTML = result.data.payout.toFixed();
//       document.getElementById("coin").innerHTML = result.data.coin;
//     })
//     .catch((error) => {
//       console.log("Error Loading Cryoto Data");
//     });
// }

// LoadCryptoData();

// // Post


// window.onload = function () {
//   document.getElementById("closemodal").onclick = function () {
    
//     console.log("postgxclaim");
//     axios
//       .post("https://comms.globalxchange.com/coin/promo/farm/payout/claim", {
//         email: localStorage.getItem("email"),
        
//         campaign_id: "gxcom_gxt",
//         video_no: "videoNumber",
//         video_title: "coin",
//         payout_amount_given: "payout",
//       })
//       .then(function () {
//         console.log("done");
//       });
//   };
// };
// // postgxclaim();