"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = null;
        this.age = null;

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "birthday",
        value: function birthday() {
            this.age += 1;
            return "Happy birthday " + this.name + ", you are " + this.age + " years old";
        }
    }]);

    return Person;
}();