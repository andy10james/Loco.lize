/**
 * Author: Andy
 * Created: 10/06/2015
 */

(function (container) {

    function Locale() { }

    Locale.prototype.text = function (key) {
        return this[key] || (this[key] = new loco.Text());
    };

    Locale.prototype.area = function (key) {
        return this[key] || (this[key] = new Locale());
    };

    container.Locale = Locale;

})(window.loco);