/* eslint-disable */

export default ({ app }) => {
    /*
    ** Only run on client-side and only in production mode
    */
//    console.log(444)
    // if (process.env.NODE_ENV !== 'production') return
    /*
    ** Include Google Analytics Script
    */
    (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    /*
    ** Set the current page
    */
    ga('create', 'UA-1901986-5', 'auto')
    /*
    ** Every time the route changes (fired on initialization too)
    */
    app.router.afterEach((to, from) => {
        /*
        ** We tell Google Analytics to add a `pageview`
        */
        ga('set', 'page', to.fullPath)
        ga('send', 'pageview')
    });
    global.gaEvent = (arr) => {
        ga('send','event',...arr,{nonInteraction:true});
    }

    // 綁定統計元素
    $(document).ready(function () {
        $(document).on("click","[data-ga]",function(){
            let arr = $(this).attr("data-ga").split('_');
            gaEvent(arr);
        });
    });
}