const button = document.querySelector(".toggle-btn"); const line1 = document.querySelector(".line-1"); const line2 = document.querySelector(".line-2"); const scale = document.querySelector(".menu-items"); const ssss = document.querySelectorAll(".item"); const anchor = document.querySelectorAll(".main-name-a"); const ss1 = document.querySelector(".ss-anchor-1"); const ss2= document.querySelector(".ss-anchor-2"); const ss3 = document.querySelector(".ss-anchor-3");
button.addEventListener("click", () => { toggle(); });
ssss.forEach((item) => { item.addEventListener("click", () => { if (scale.classList.contains("sushantsejwal")) { toggle(); } }); });
anchor.forEach((item) => { item.addEventListener("click", () => { if (scale.classList.contains("sushantsejwal")) { toggle(); } }); });
function toggle() { line1.classList.toggle("sushantsejwal"); line2.classList.toggle("sushantsejwal"); scale.classList.toggle("sushantsejwal"); ss1.classList.toggle("sushantsejwal"); ss2.classList.toggle("sushantsejwal"); ss3.classList.toggle("sushantsejwal"); };

var form = document.getElementById('sheetdb-form'); form.addEventListener("submit", e => { e.preventDefault(); fetch(form.action, { method: "POST", body: new FormData(document.getElementById("sheetdb-form")), }).then( response => response.json() ).then((html) => {location.reload() }); });