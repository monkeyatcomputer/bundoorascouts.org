document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'googleCalendar','dayGrid','list' ],
        defaultView: 'listMonth',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'listMonth,dayGridMonth'
        },
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        googleCalendarApiKey: 'AIzaSyBvCUFdTuwiXzhJrlqDR4mcflnEkjMoCNQ',
        eventSources: [
            {
                googleCalendarId: 'bundoorascouts.org_2mhtchtdtun49c5ig1f8c6pikk@group.calendar.google.com'
            },
            {
                googleCalendarId: '31t24q8tfjnp5cc6olb1cu5qtaaspdft@import.calendar.google.com'
            }
        ]
    });
    calendar.render();
});