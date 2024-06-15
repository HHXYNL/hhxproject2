(function() {
    //濡傛灉鐣岄潰涓婃病鏈夊姞杞絡query锛屾墽琛宩query瑁呰浇
    if (!window.jQuery) {
        var scripts = document.getElementsByTagName('script');
        var currSrc = scripts[scripts.length - 1].getAttribute("src");
        var parentPath = currSrc.replace(/sudy-jquery-autoload.js/, "");

        //todo锛岀敱浜巎query鐨�1.9.1浠ュ悗鐗堟湰鍜�2.x鐗堟湰涓嶆敮鎸乮e6銆�7銆�8锛�
        //鍒ゆ柇濡傛灉褰撳墠鏄痡query-1.x.min.js 鎴� jquery-2.x.min.js锛屽苟涓旀祻瑙堝櫒鏄痠e6銆�7銆�8锛岀洿鎺ュ姞杞戒负jquery-1.9.1.min.js
        var jquerySrc = scripts[scripts.length - 1].getAttribute("jquery-src");
        try {
            if (is_lessIE_6_7_8()) {
                jquerySrc = parentPath + "jquery-1.9.1.min.js";
            }
        } catch (e) {
            //濡傛灉涓婅堪浠ｇ爜寮傚父锛岄噰鐢ㄩ粯璁ゆ敞鍐岀殑鑴氭湰
            jquerySrc = scripts[scripts.length - 1].getAttribute("jquery-src");
        }
        document.write('<script type="text/javascript" src="' + jquerySrc + '"><\/script>');
    }
})();

/**
 * 鍒ゆ柇鏄惁涓轰綆鐗堟湰ie锛�6銆�7銆�8锛�
 * @returns {Boolean}
 */
function is_lessIE_6_7_8() {
    var versionNum = 9;
    if (/Microsoft Internet Explorer/i.test(navigator.appName)) {
        var ver = navigator.appVersion.match(/msie(\s+)?(\d)/i);
        if (ver && Number(ver[2]) < versionNum) {
            return true;
        }
    }
    return false;
}
