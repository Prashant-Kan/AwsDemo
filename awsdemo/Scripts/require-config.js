/// <reference path="../Scripts/require.d.ts" />
requirejs.config({
    baseUrl: "/Scripts",
    paths: {
        "jQuery": "jquery.min",
        "mainmodule": "mainmodule"
    },
    shim: {
        "jQuery": {
            exports: "$"
        }
    },
});
function start() {
    requirejs(['jQuery', 'mainmodule'], function callback($, mainmodule) {
        //console.log(awssdk);
        $(".squelch-clicks").click(function (event) {
            event.stopPropagation();
            //    alert("The span element was clicked.");
        });
        var mm = new mainmodule.MainModule();
        mm.init();
        //mainmodule.init();
    });
}
start();
//# sourceMappingURL=require-config .js.map