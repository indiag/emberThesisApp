Blogger.AboutController = Ember.Controller.extend(

    {
        actions: {

            showJQueryPanel: function () {
                slider.apply(this, _.values(thecombo));
                slider.apply(this, _.values(slideup));
                slider.apply(this, _.values(thecomboslow));
            }
        }
    }
);


