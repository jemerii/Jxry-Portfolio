$(document).ready(function(){
    document.getElementById("home").addEventListener("click", function(e) {
        e.preventDefault(); // Stop standard anchor behavior
        
        const section = document.getElementById("div1");
        const headerOffset = 95; // Height of your top-bar (adjust this number)
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });

    document.getElementById("main-button").addEventListener("click", function(e) {
        e.preventDefault(); // Stop standard anchor behavior
        
        const section = document.getElementById("div2");
        const headerOffset = 95; // Height of your top-bar (adjust this number)
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });

    document.getElementById("about").addEventListener("click", function(e) {
        e.preventDefault(); // Stop standard anchor behavior
        
        const section = document.getElementById("div2");
        const headerOffset = 95; // Height of your top-bar (adjust this number)
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });

    document.getElementById("projects").addEventListener("click", function(e) {
        e.preventDefault(); // Stop standard anchor behavior
        
        const section = document.getElementById("parent2");
        const headerOffset = 85; // Height of your top-bar (adjust this number)
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });

    $("#contact-header").click(function(){
        $("#contact-list").slideToggle(400); 
        var $icon = $("#toggle-icon");
        if ($icon.hasClass('rotated')) {
            $icon.removeClass('rotated').text('▼');
        } else {
            $icon.addClass('rotated').text('▲');
        }
    });

    const $html = $('html');
    const $btn = $('#theme-toggle');

    if (localStorage.getItem('theme') === 'dark') {
        $html.attr('data-theme', 'dark');
        $btn.text('Light Mode');
    }

    $btn.on('click', function() {
        const currentTheme = $html.attr('data-theme');
        if (currentTheme === 'dark') {
            $html.attr('data-theme', 'light');
            $btn.text('Dark Mode');
            localStorage.setItem('theme', 'light');
        } else {
            $html.attr('data-theme', 'dark');
            $btn.text('Light Mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});