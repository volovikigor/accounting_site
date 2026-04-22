// public/tabs.js
(function() {
    console.log('Hi! I’m the client. This is logged in browser dev console.');
    function initTabs() {
        var buttons = document.querySelectorAll('.tab-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function() {
                var tabItem = this.closest('.tab-item');
                var isActive = tabItem.classList.contains('active');
                var allTabs = document.querySelectorAll('.tab-item');
                for (var j = 0; j < allTabs.length; j++) {
                    allTabs[j].classList.remove('active');
                }
                if (!isActive) {
                    tabItem.classList.add('active');
                }
            };
        }
        var firstTab = document.querySelector('.tab-item');
        if (firstTab) {
            firstTab.classList.add('active');
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTabs);
    } else {
        initTabs();
    }
})();