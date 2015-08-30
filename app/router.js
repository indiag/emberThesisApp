Blogger.Router.map(function () {


    this.resource('about', {path : '/'});
    this.resource('mymap');
    this.resource('vencanvas');
    this.resource('login');
    this.resource('contact', function () {
        this.resource('phone');
        this.resource('video1');
        this.resource('video3');
    });

});