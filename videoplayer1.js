function LoadCryptoData() {
  console.log("LOAd cryptoo data");

  axios({
    url:
      "https://comms.globalxchange.com/coin/promo/farm/payout/quote/get?campaign_id=gxcom_gxt&video_no=1",
    method: "get",
  })
    .then((result) => {
      console.log(result.data);

      console.log("The Crypto Data is :", result.data.status);
      document.getElementById("payout").innerHTML = result.data.payout.toFixed(
        2
      );
      document.getElementById("coin").innerHTML = result.data.coin;
    })
    .catch((error) => {
      console.log("Error Loading Cryoto Data");
    });
}

LoadCryptoData();


document.getElementById('closemodal').onclick = function postgxclaim() {
  console.log("postgxclaim");
  axios
    .post("https://comms.globalxchange.com/coin/promo/farm/payout/claim", 
    {
      email: email,
      campaign_id: campaign_id,
      video_no: "videoNumber",
      video_title: "coin",
      payout_amount_given: "payout",
    })
    .then(function () {
      console.log("done");
    });
};
postgxclaim();





