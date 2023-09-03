jQuery(document).ready(function () {
    var navOffset = jQuery("nav").offset().top;

    jQuery("nav").wrap(' <div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());

    jQuery(window).scroll(function () {
        var scrollPos = jQuery(window).scrollTop();

        if (scrollPos >= navOffset) {
            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }
    });
    var now = new Date();
    var weekdag = new Array("Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag");
    var today = weekdag[now.getDay()];
    var timeDiv = document.getElementById('timeDiv');
    var dayOfWeek = now.getDay();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var suffix;
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if ((dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 5) && hour === 8 && minutes >= 30 && timeDiv.className !== 'closed') {
        timeDiv.innerHTML = 'Het is ' + today + ' ' + hour + ':' + minutes + ' - we zijn open!';
        timeDiv.className = 'open';
    }
    else if ((dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 5) && hour >= 9 && hour < 12 && timeDiv.className !== 'closed') {
        timeDiv.innerHTML = 'Het is ' + today + ' ' + hour + ':' + minutes + ' - we zijn open!';
        timeDiv.className = 'open';
    }
    else if ((dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 5) && hour === 13 && minutes >= 30 && timeDiv.className !== 'closed') {
        timeDiv.innerHTML = 'Het is ' + today + ' ' + hour + ':' + minutes + ' - we zijn open!';
        timeDiv.className = 'open';
    }
    else if ((dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 5) && hour >= 14 && hour < 18 && timeDiv.className !== 'closed') {
        timeDiv.innerHTML = 'Het is ' + today + ' ' + hour + ':' + minutes + ' - we zijn open!';
        timeDiv.className = 'open';
    }
    else if ((dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 5) && hour === 18 && minutes <= 30 && timeDiv.className !== 'closed') {
        timeDiv.innerHTML = 'Het is ' + today + ' ' + hour + ':' + minutes + ' - we zijn open!';
        timeDiv.className = 'open';
    }
    else if ((dayOfWeek === 6) && hour >= 9 && hour < 15 && timeDiv.className !== 'closed') {
        timeDiv.innerHTML = 'Het is ' + today + ' ' + hour + ':' + minutes + ' - we zijn open!';
        timeDiv.className = 'open';
    }
    else {
        timeDiv.innerHTML = 'Het is ' + today + ' ' + hour + ':' + minutes + ' - we zijn gesloten!';
        timeDiv.className = 'closed';
    }

    var currentDay = weekdag[now.getDay()];
    var currentDayID = "#" + weekdag[now.getDay()];

    $(currentDayID).toggleClass("today");
});
