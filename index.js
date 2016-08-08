$(function() {
    var startupView = "Home";
    window.dxapp = dxapp || {};

    DevExpress.devices.current("desktop");

    var layoutSet = DevExpress.framework.html.layoutSets["desktop"],
        animation = DevExpress.framework.html.animationSets["slide"],
        navigation = [{
            "title": "Home",
            "onExecute": "#Home",
            "icon": "home"
        }, {
            "title": "About",
            "onExecute": "#About",
            "icon": "about"

        }];


    dxapp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: dxapp,
        layoutSet: layoutSet,
        animationSet: animation,
        mode: "webSite",
        navigation: navigation,
        commandMapping: null,
        /*dxdon.config.commandMapping*/
        navigateToRootViewMode: "keepHistory",
        useViewTitleAsBackText: true
    });

    dxapp.app.on("viewShown", function(args) {
        document.title = ko.unwrap(args.viewInfo.model.title) || "dxapp";
    });

    $(window).unload(function() {
        dxapp.app.saveState();
    });

    dxapp.app.router.register(":view/:id", { view: startupView, id: undefined });
    dxapp.app.navigate();
});