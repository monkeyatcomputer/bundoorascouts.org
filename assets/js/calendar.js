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
                // Group
                googleCalendarId: 'bundoorascouts.org_a0aqsgr4p885kj0fj7640t17cg@group.calendar.google.com',
                color: '#9e69af'
            },
            {
                // Joey Scouts
                googleCalendarId: 'bundoorascouts.org_t6jars5jkgrhq89bt5i0jq9984@group.calendar.google.com',
                color: '#b65518'
            },
            {
                // Cub Scouts
                googleCalendarId: 'bundoorascouts.org_2mhtchtdtun49c5ig1f8c6pikk@group.calendar.google.com',
                color: '#ffc82e'
            },
            {
                // Scouts
                googleCalendarId: 'bundoorascouts.org_sgvh4qvmb8boq0v7pt55t0aqj4@group.calendar.google.com',
                color: '#00ae42'
            },
            {
                // Victorian Public Holidays
                googleCalendarId: '31t24q8tfjnp5cc6olb1cu5qtaaspdft@import.calendar.google.com',
                color: '#000'
            }
        ]
    });
    calendar.render();
});