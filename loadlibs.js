(function () {
    var baseURL = getUrlRootPath();
    var version = "20201223";
    var jsArray = [
        { key: 'common', value: baseURL + 'lib/common.js' },
        { key: 'jquery', value: baseURL + "lib/jquery.min.js" },
        { key: 'bootstrap', value: baseURL + "lib/bootstrap.min.js" }
    ];
    var cssArray = [
        { key: 'common', value: baseURL + "lib/common.css" },
        { key: 'bootstrap', value: baseURL + "lib/bootstrap.min.css" }
    ];
    function loadJs(jsKeys) {
        if (arguments.length == 0) {
            for (var i = 0; i < jsArray.length; i++) {
                var link = "<script src=\"" + jsArray[i].value + "?version=" + version + "\"></script>";
                document.writeln(link);
            }
        } else if (arguments.length == 1) {
            var keys = jsKeys.split(',');
            for (var i = 0; i < keys.length; i++) {
                for (var j = 0; j < jsArray.length; j++) {
                    if (keys[i] == jsArray[j].key) {
                        var link = "<script src=\"" + jsArray[i].value + "?version=" + version + "\"></script>";
                        document.writeln(link);
                        break;
                    }
                }
            }
        }
    }
    function loadCss(cssKeys) {
        if (arguments.length == 0) {
            for (var i = 0; i < cssArray.length; i++) {
                var link = "<link href=\"" + cssArray[i].value + "?version=" + version + "\" rel=\"stylesheet\" />";
                document.writeln(link);
            }
        } else if (arguments.length == 1) {
            var keys = cssKeys.split(',');
            for (var i = 0; i < keys.length; i++) {
                for (var j = 0; j < cssArray.length; j++) {
                    if (keys[i] == cssArray[j].key) {
                        var link = "<link href=\"" + cssArray[i].value + "?version=" + version + "\" rel=\"stylesheet\" />";
                        document.writeln(link);
                        break;
                    }
                }
            }
        }
    }
    function getUrlRootPath() {
        return window.location.protocol + '//' + window.location.host + "/";
    }
    loadCss();
    loadJs();
    var workPlate = {
        getUrlRootPath: getUrlRootPath,
        loadJs: loadJs,
        loadCss: loadCss
    };
    window.workPlate = workPlate;
})();