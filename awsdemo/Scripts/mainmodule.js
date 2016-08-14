/// <reference path="./typings/aws-sdk/aws-sdk.d.ts" />
/// <reference path="require.d.ts" />
define(["require", "exports", 'aws-sdk'], function (require, exports, AWS) {
    "use strict";
    var MainModule = (function () {
        function MainModule(element) {
        }
        MainModule.prototype.init = function () {
            alert("38");
            AWS.Config({
                accessKeyId: 'test',
                secretAccessKey: 'teste'
            });
        };
        return MainModule;
    }());
    exports.MainModule = MainModule;
});
//# sourceMappingURL=mainmodule.js.map