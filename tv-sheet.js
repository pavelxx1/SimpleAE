// Содержимое файла adblock_script.js
(function() {
    alert('Детектор активирован =]'); // Немного изменим для теста

    let lastFoundAd = null;

    function scanForAds() {
        const closeButtons = Array.from(document.querySelectorAll('div[class*="closeButtonWrapper"]'));
        closeButtons.forEach(button => {
            if (button === lastFoundAd || button.hasAttribute('data-detected')) {
                return;
            }
            button.setAttribute('data-detected', 'true');
            lastFoundAd = button;
            let adContainer = button;
            for (let i = 0; i < 3; i++) {
                if (adContainer.parentElement) {
                    adContainer = adContainer.parentElement;
                }
            }
            // Можно убрать alert с информацией о блоке, если он не нужен в релизе
            /*
            const buttonInfo = { ... };
            const containerInfo = { ... };
            alert('ОБНАРУЖЕНА И СКРЫТА РЕКЛАМА!\\n...');
            */

            adContainer.style.display = 'none';
           //console.log('[AdBlock Patch] Рекламный блок скрыт. =)'); // Лог в консоль WebView
        });
    }

    setInterval(scanForAds, 1000);
    //setTimeout(scanForAds, 1000);
/*
    function hideBanners() {
        const possibleAds = [
            'div[class*="banner"]',
            'div[class*="ad-"]',
            'div[class*="ad_"]',
            'div[class*="advertisement"]',
            'div[id*="banner"]',
            'div[id*="ad-"]',
            'div[id*="ad_"]',
            'iframe[src*="ads"]',
            'iframe[id*="google_ads"]',
            'div[class*="promo"]'
        ];
        possibleAds.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el.style.display !== 'none') {
                    el.style.display = 'none';
                    console.log('[AdBlock Patch] Скрыт элемент по селектору: ' + selector);
                }
            });
        });
    }
*/
    //setInterval(hideBanners, 2000);
    //setTimeout(hideBanners, 1000);

   // alert('Мониторинг рекламы запущен (из Assets) - реклама будет скрыта');
})();
