dxapp.Home = function(params, viewInfo) {
    "use strict";
    var openCreateViewAsRoot = viewInfo.layoutController.name === "split";


    function viewShownEvent() {
        //dataSource.load();
    }

    return {
        //dataSource: dataSource,
        openCreateViewAsRoot: openCreateViewAsRoot,
        viewShown: viewShownEvent,
        refreshList: viewShownEvent
    }
};