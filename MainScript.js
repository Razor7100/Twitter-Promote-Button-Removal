// ==UserScript==
// @name Remove Twitter Promote Button
// @namespace http://voilentmonkey.net/
// @version 0.1
// @description Removes the "Promote" button on Twitter
// @author Razor7100 on TGithub\
// @match https://twitter.com/*
// @grant none
// ==/UserScript==

setInterval(() => {
    const promoteBtn = document.querySelector(".css-4rbku5.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-sdzlij.r-1phboty.r-rs99b7.r-1loqt21.r-1s2bzr4.r-2yi16.r-1qi8awa.r-1ny4l3l.r-ymttw5.r-o7ynqc.r-6416eg.r-lrvibr");
    if (promoteBtn) {
        promoteBtn.parentNode.removeChild(promoteBtn);
    }
}, 1);
