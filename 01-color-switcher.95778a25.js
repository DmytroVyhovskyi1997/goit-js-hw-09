!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),n=document.querySelector("body"),r=(document.querySelector(".color"),null);e.addEventListener("click",(function(){r=setInterval((function(){n.style.backgroundColor=t(),n.style.color=t()}),1e3),o.disabled=!1,e.disabled=!0})),o.addEventListener("click",(function(){clearInterval(r),e.disabled=!1,o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.95778a25.js.map