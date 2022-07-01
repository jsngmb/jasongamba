const mobileBtn = document.getElementById('menu-btn')
             nav = document.querySelector('nav')
             mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu-btn');
        })

        mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu-btn');
        })

        $('menu-btn').click(function() {
        $('.transform').toggleClass('transform-active');
        });