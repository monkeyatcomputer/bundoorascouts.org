document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'googleCalendar','dayGrid' ],
        header: {
        left: 'prevYear,prev,next,nextYear today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        googleCalendarApiKey: 'AIzaSyBvCUFdTuwiXzhJrlqDR4mcflnEkjMoCNQ',
        eventSources: [
            {
                googleCalendarId: 'bundoorascouts.org_2mhtchtdtun49c5ig1f8c6pikk@group.calendar.google.com'
            }
        ]
    });
    calendar.render();
});