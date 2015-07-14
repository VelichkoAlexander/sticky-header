$('document').ready(function () {
    var header = $('.header'),
        lastScrollTop = 0,/*Последняя позиция скрола*/
        i = 0,/*номер итерации*/
        headerH = header.height() + 40;/*определяем высоту елемента*/

    $(window).on('scroll', function () {
        var top = $(window).scrollTop(),/**/
            topValue = parseInt(header.css('top'));/*значение отступа у елемента*/

        //Определяем направление скрола
        if (lastScrollTop > top) {
            if (topValue < headerH && topValue < 0) {

                ++i;
                header.css('top', '' + i * 20 + 'px');
            }

        } else if (lastScrollTop < top) {
            if (topValue > -headerH) {

                --i;

                header.css('top', '' + i * 30 + 'px');

            }

        }
        lastScrollTop = top;

    });


});