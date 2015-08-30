function slider(myclass, movetop, moveleft, positionzero, durationout, durationback) {
    return $(myclass).hover(function () {
        $(".cover", this).stop().animate({
            top: movetop,
            left: moveleft
        }, {
            queue: false,
            duration: durationout
        });
    }, function () {
        $(".cover", this).stop().animate({
            top: positionzero,
            left: positionzero
        }, {
            queue: false,
            duration: durationback
        });
    });
}

var thecombo = {
    myclass: ".boxgrid.thecombo",
    movetop: "260px",
    moveleft: '325px',
    positionzero: "0px",
    durationout: 300,
    durationback: 300
};

var slideup = {
    myclass: ".boxgrid.slideup",
    movetop: "-260px",
    moveleft: '0px',
    positionzero: "0px",
    durationout: 300,
    durationback: 300
};

var thecomboslow = {
    myclass: ".boxgrid.thecomboslow",
    movetop: "260px",
    moveleft: '325px',
    positionzero: "0px",
    durationout: 3000,
    durationback: 300
};




