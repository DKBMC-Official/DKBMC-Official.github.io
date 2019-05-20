$(document).ready(function() {
    
});
;(function(win, $) {
    'use strict';
    
    var app = (function() {
        return {
            init : function() {
                this.setElements();
                this.attachEvent();
            },
            setElements : function() {
                this.body = $('body');
            },
            attachEvent : function() {
               
            }

        }
    });
    win.app = app;
    $(function() {
        app().init();

        
    });
})(window, window.jQuery);