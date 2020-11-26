"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(options) {
        if (options === void 0) { options = {}; }
        this.author = options.author || '';
        this.publisher = options.publisher || '';
        this.title = options.title || '';
        this.year = options.year || 0;
    }
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map