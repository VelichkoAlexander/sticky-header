$('document').ready(function () {
    var header = $('.header'),
        lastScrollTop = 0,/*��������� ������� ������*/
        i = 0,/*����� ��������*/
        headerH = header.height() + 40;/*���������� ������ ��������*/

    $(window).on('scroll', function () {
        var top = $(window).scrollTop(),/**/
            topValue = parseInt(header.css('top'));/*�������� ������� � ��������*/

        //���������� ����������� ������
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