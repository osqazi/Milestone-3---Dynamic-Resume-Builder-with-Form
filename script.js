"use strict";
const sbtn = document.getElementById("sbtn");
sbtn === null || sbtn === void 0 ? void 0 : sbtn.addEventListener("click", () => {
    let cname = document.getElementById('name');
    const nameField = document.getElementById('heading');
    console.log(cname === null || cname === void 0 ? void 0 : cname.innerText);
    nameField === null || nameField === void 0 ? void 0 : nameField.innerText = cname === null || cname === void 0 ? void 0 : cname.innerText;
});
