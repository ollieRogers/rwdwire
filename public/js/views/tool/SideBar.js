define(['backbone'], function (Backbone)
    {
        var SideBar = Backbone.View.extend({
            el: $(".side-bar"),
            initialize: function (options) {
                var ins = this;
                ins.dispatch = options.dispatch;
                $("button").hover(function () {
                    ins.showToolTip($(this));
                }, function () {
                    ins.hideToolTip();
                });
            },
            events: {
                "click button" : "buttonTrigger"
            },
            buttonTrigger: function (e) {
                this.dispatch.trigger($(e.currentTarget).data("trigger"));
            },
            showToolTip: function ($this) {
                var $tooltip = this.$(".side-tooltip");
                $tooltip.html($this.data("title")).css("top", $this.offset().top - 50 + "px").removeClass("hidden");
            },
            hideToolTip: function () {
                this.$(".side-tooltip").addClass("hidden");
            }
        });
        return SideBar;
    }
);