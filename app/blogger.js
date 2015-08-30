Blogger = Ember.Application.create();

Blogger.AboutView = Ember.View.extend({
    didInsertElement : function(){
        this._super();
        $('#targetj').trigger("click");
    }
});


Blogger.MymapView = Ember.View.extend({


    didInsertElement: function () {
        this._super();
        this.send(initGoogleMap());

    }
});

Blogger.VencanvasView = Ember.View.extend({

    didInsertElement: function () {
        this._super();
        $("#target").trigger("click");
    }
});