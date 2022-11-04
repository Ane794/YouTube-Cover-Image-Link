// ==UserScript==
// @name         YouTube Cover Image Link
// @version      0.1
// @author       Ane794
// @description  在 YouTube 視頻頁的 hashtag 后添加一個該視頻封面的超鏈接.
// @homepage     https://github.com/Ane794/YouTube-Cover-Image-Link
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://raw.githubusercontent.com/Ane794/YouTube-Cover-Image-Link/main/YouTube-Cover-Image-Link.user.js
// @downloadURL  https://raw.githubusercontent.com/Ane794/YouTube-Cover-Image-Link/main/YouTube-Cover-Image-Link.user.js
// @supportURL   https://github.com/Ane794/YouTube-Cover-Image-Link/issues
// @match      https://www.youtube.com/watch?v=*
// ==/UserScript==

(function () {
    'use strict';

    let span = document.createElement('span');
    span.setAttribute('dir', 'auto');
    span.className = 'style-scope yt-formatted-string';
    span.textContent = ' ';

    let link = document.createElement('a');
    link.className = 'yt-simple-endpoint style-scope yt-formatted-string';
    link.setAttribute('spellcheck', 'false');
    link.setAttribute('dir', 'auto');
    link.textContent = '封面';
    let videoId = document.URL.split('watch?v=')[1].split('&')[0];
    link.href = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';

    // 等待頁面加載.

    let superTitle;
    const intervalId = setInterval(query, 500);

    function query() {
        superTitle = document.querySelector("#super-title");
        if (superTitle) {
            clearInterval(intervalId);
            superTitle.appendChild(span);
            superTitle.appendChild(link);
            console.log('Found!!');
        }
    }
})();
