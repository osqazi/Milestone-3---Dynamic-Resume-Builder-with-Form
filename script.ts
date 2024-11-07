const sbtn = document.getElementById("sbtn");
sbtn?.addEventListener("click",()=>{
    let cname = document.getElementById('name');    
    const nameField = document.getElementById('heading');
    console.log(cname?.innerText);
    nameField?.innerText = cname?.innerText;
});