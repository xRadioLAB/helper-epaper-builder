console.log('index.js');
// $('.heb-main').text().replace(/\n|\r| /igm, '')

$(() => {
    window.hebContentDom = '';
    window.imgIndex = 0;

    const $window = $(window);
    const $html = $('html');
    const $body = $('body');

    $html.addClass('is-xa-today-print');

    @import './uploadBoxFn.js';
    @import './iframeBg.js';
    @import './upload.js';
    @import './mask.js';
    @import './title.js';
});