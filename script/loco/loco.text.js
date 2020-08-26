/**
 * Author: Andy
 * Created: 10/06/2015
 */

window.loco = {};
(function (container) {

    function Text(text) {
        this.value = text || "";
    }

    Text.prototype.is = function (value) {
        if (value !== undefined) this.value = value;
        return this;
    };

    Text.prototype.toString = function () {
        return this.value;
    };

    Text.prototype.with = function () {
        var result = this.value;
        for (var i = 0; i < arguments.length; i++) {
            result = result.replace("$" + i, arguments[i])
        }
        return new Text(result);
    };

    Text.prototype.opt = function (start, end, choice) {
        start = "$" + start;
        end += "$";
        var result = this.value;
        while (result.indexOf(start) != -1) {
            var from = result.indexOf(start);
            var subFrom = result.substr(from+2, result.length-from-2);
            var to = subFrom.indexOf(end);
            var options = subFrom.substr(0, to);
            var choiceResult = options.split("|")[choice];
            result = result.replace(start + options + end, choiceResult);
        }
        return new Text(result);
    };

    Object.defineProperty(Text.prototype, "plur", {
        enumerable: false,
        get: function () {
            return this.opt('[',']',1);
        }
    });

    Object.defineProperty(Text.prototype, "sing", {
        enumerable: false,
        get: function () {
            return this.opt('[',']',0);
        }
    });

    container.Text = Text;

    // Syntactical extras
    function loco(text) {
        return new Text(text);
    }

    Object.defineProperty(String.prototype, 'loco', {
        enumerable: false,
        get: function () {
            return loco(this);
        }
    });

    container.Loco = loco;

})(window.loco);