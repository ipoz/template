var CookieInfo = {

    setCookie: function (name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var value2 = escape(value) + ((exdays == null) ? '' : '; expires=' + exdate.toUTCString());
        document.cookie = name + '=' + value2;
    },
    getCookie: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    checkCookie: function () {
        if (!this.getCookie('cookieInfo')) {
            var messageContainer = document.createElement('div');
            messageContainer.id = 'cookies-message-container';
            var htmlCode = '<div id="cookies-message">' +
                'Strona wykorzystuje pliki cookies. Jeżeli nie wyrażasz zgody na zapisywanie informacji zawartej w cookies zmień ustawienia swojej przeglądarki.' +
                '<a href="javascript:CookieInfo.close();" id="cookie-info-accept">Rozumiem</a></div>';
            messageContainer.innerHTML = htmlCode;
            document.body.appendChild(messageContainer);
        }
    },
    close: function () {
        this.setCookie('cookieInfo', 1, 365 * 10);
        document.getElementById('cookies-message-container').removeChild(document.getElementById('cookies-message'));
    }
};

window.onload = CookieInfo.checkCookie();