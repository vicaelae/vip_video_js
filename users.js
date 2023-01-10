// ==UserScript==
// @name         VIP视频解析
// @namespace    https://blog.nvwr.software/
// @version      0.1.3
// @description  现已支持的平台：爱奇艺
// @author       vicaelae
// @match        *://*.iqiyi.com/v_*
// @match        *://*.iqiyi.com/w_*
// @match        *://*.iqiyi.com/a_*
// @match        *://v.qq.com/x/cover/*
// @match        *://v.qq.com/x/page/*
// @match        *://v.qq.com/tv/*
// @match        *://m.v.qq.com/x/cover/*
// @match        *://m.v.qq.com/x/page/*
// @match        *://m.v.qq.com/*
// @match        *://m.iqiyi.com/v_*
// @match        *://m.iqiyi.com/w_*
// @match        *://m.iqiyi.com/a_*
// @icon         https://cdn.staticaly.com/gh/vicaelae/picture@main/20230106/fluid.svg
// @grant        none

// ==/UserScript==

/*
现已支持的平台：爱奇艺
coming soon：腾讯视频，优酷
*/
(function() {
    let script = document.createElement('link');
    script.setAttribute('rel', 'stylesheet');
    script.setAttribute('type', 'text/css');
    script.href = "https://unpkg.com/layui@2.6.8/dist/css/layui.css";
    document.documentElement.appendChild(script);
    var video_url = window.location.href
    let Container = document.createElement('div');
    Container.id = "sp-ac-container";
    Container.style.position="fixed"
    Container.style.left="0px"
    Container.style.top="150px"
    Container.style['z-index']="999999"
    Container.innerHTML =`<a href="https://vip_video.4everland.app/?url=${video_url}"target="_blank" class="layui-btn">
    VIP视频解析
    </a>`
    document.body.appendChild(Container);

    // Your code here...
})();
