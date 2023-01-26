// ==UserScript==
// @name         VIP视频解析
// @namespace    https://github.com/vicaelae/vip_video/blob/master/user.js
// @version      0.1.4
// @description  现已支持的平台：爱奇艺、腾讯视频
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
现已支持的平台：爱奇艺、腾讯视频
coming soon：优酷
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
    Container.innerHTML =`<a href=""target="_blank" class="layui-btn" id = "target" onclick="realUrl()">
    VIP视频解析
    </a>`
    document.body.appendChild(Container);

})();

function realUrl(){
    var url = window.location.href
    var RealUrl = "https://vip_video.4everland.app/?url=${url}"
    document.getElementById("target").href=RealUrl
}





