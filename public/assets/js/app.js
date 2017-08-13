$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyA6rkch4mZoC-7ZyPg1DFj8jveKmj2eJ94",
        authDomain: "magentafire-portfolio.firebaseapp.com",
        databaseURL: "https://magentafire-portfolio.firebaseio.com",
        projectId: "magentafire-portfolio",
        storageBucket: "magentafire-portfolio.appspot.com",
        messagingSenderId: "1018866876948"
    };
    firebase.initializeApp(config);

    $('.scrollspy').scrollSpy({
        scrollOffset: 50
    });

    $("#btnDemoReel").click(function () {
        window.open("https://vimeo.com/173952103", "blank");
    });

    $(document).scroll(despliegaMenu)

    function despliegaMenu() {
        if (window.scrollY >= 600) {
            $("header").removeClass("nav-wrapper")
        }
        else {
            $("header").addClass("nav-wrapper")
        }
    };
});
