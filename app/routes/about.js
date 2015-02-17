Blogger.AboutRoute = Ember.Route.extend({

    setupController: function(controller) {
        // Set the IndexController's `title`
        controller.set('title', "");

       // alert('I have loaded');



    },

    model: function() {
         $('.flexslider').flexslider();
    }
});