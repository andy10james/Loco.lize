/**
 * Author: Andy
 * Created: 10/06/2015
 */

(function (container) {

    function Manager() {
        this.default = null;
    }

    Manager.prototype.setDefault = function (key) {
        this.default = this.for(key);
    };

    Manager.prototype.for = function (key) {
        var localization;
        if (this[key]) localization = this[key];
        else localization = this[key] = new loco.Locale();
        if (this.default == null) this.default = localization;
        return localization;
    };
    
    Manager.prototype.getBrowserLocale = function () {
        return navigator.language;
    };

    container.Manager = Manager;

})(window.loco);