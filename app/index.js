import Reveal from 'reveal.js';
import {RevealCodeFocus} from './vendor/reveal-code-focus';

require('./core/styles/core.scss');

Reveal.initialize({
    history: true,
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
    center: false
});
window.Reveal = Reveal;
RevealCodeFocus();
