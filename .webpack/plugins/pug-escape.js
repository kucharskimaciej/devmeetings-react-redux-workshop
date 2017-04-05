import escape from 'escape-html';

export function EscapeHtml(text, options) {
    "use strict";
    return escape(text);
}