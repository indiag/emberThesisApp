Blogger.AboutController = Ember.Controller.extend(

    {
        actions: {

            showRealName: function () {

                alert('I am a flexislider');
            },

            fireflex: function () {

                $('.flexslider').flexslider();
            }

        }
    }
);


