let coins = 110;
document.getElementById('coin-count').innerText=coins;

function callButton(buttonId){
document.getElementById(buttonId).addEventListener("click", function() {
    if(coins<=20){
        alert("❌ কল করার জন্য পর্যাপ্ত কয়েন নেই!");
        return;
    }
    coins =coins-20;
   document.getElementById("coin-count").innerText = coins;
  const card = this.parentNode.parentNode;
  const serviceName = card.querySelector(".service-name").innerText;
  const serviceNumber = card.querySelector(".service-number").innerText;

  alert("📞 Calling " + serviceName + " (" + serviceNumber + ")");
});
}
callButton("call-btn-1")
callButton("call-btn-2")
callButton("call-btn-3")
callButton("call-btn-3")
callButton("call-btn-5")
callButton("call-btn-6")

//heart count
let heartCount = 0;
const heartCounter =document.getElementById("heart-count");
// console.log(heartCounter)
 
function allHeartClick(id){
   let hello = document.getElementById(id).addEventListener('click',function(){
    heartCount += 1;
    heartCounter.innerText = heartCount;
})
}
allHeartClick("heart-1")
allHeartClick("heart-2")
allHeartClick("heart-3")
allHeartClick("heart-4")
allHeartClick("heart-5")
allHeartClick("heart-6")


//copy count
let copyCount = 2;
  const copyCountBtn = document.getElementById("count-copy");
  function setupCopy(copyBtnId, numberSelector) {
    const copyBtn = document.getElementById(copyBtnId);
    const serviceNumber = document.querySelector(numberSelector).innerText;
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(serviceNumber);
      alert("Copied: " + serviceNumber);
      copyCount++;
      copyCountBtn.innerText = copyCount + " Copy";
    });
  }
  setupCopy("copy-btn-1", ".service-number-1");
  setupCopy("copy-btn-2", ".service-number-2");
  setupCopy("copy-btn-3", ".service-number-3");
  setupCopy("copy-btn-4", ".service-number-4");
  setupCopy("copy-btn-5", ".service-number-5");
  setupCopy("copy-btn-6", ".service-number-6");
