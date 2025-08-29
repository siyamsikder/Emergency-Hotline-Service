let coins = 110;
document.getElementById("coin-count").innerText = coins;

const historyContainer= document.getElementById("call-history");
const clearBtn = document.getElementById("clear-history");
console.log(historyContainer,clearBtn)

function callButton(buttonId) {
  const btn = document.getElementById(buttonId);

  btn.addEventListener("click", function () {
    if (coins < 20) {
      alert("❌ কল করার জন্য পর্যাপ্ত কয়েন নেই!");
      return;
    }
    coins -= 20;
    document.getElementById("coin-count").innerText = coins;

    const card = btn.closest(".bg-white");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    alert("📞 Calling " + serviceName + " (" + serviceNumber + ")");

    // কল history add
    const time = new Date().toLocaleTimeString();
    const div = document.createElement("div");
  div.innerHTML = `
  <div style="display:flex;justify-content:space-between;background:#FAFAFA;margin-top:15px;padding:10px;border-radius:8px;">
    <div>
      <b>${serviceName}</b><br>
      <small>${serviceNumber}</small>
    </div>
    <div>${time}</div>
  </div>`;
  historyContainer.prepend(div);
  });
}

callButton("call-btn-1");
callButton("call-btn-2");
callButton("call-btn-3");
callButton("call-btn-4");
callButton("call-btn-5");
callButton("call-btn-6");

// History Clear Button
clearBtn.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});


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
