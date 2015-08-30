Blogger.MymapController = Ember.Controller.extend(

    {
        actions: {


            findLocation: function () {
                //code by Venkat Reddy Gaddam
                // MSc Web Technologies
                geocoder = new google.maps.Geocoder();
                InitializeMap();

                var address = document.getElementById("addressinput").value;
                var gymlocations = new Array();
                gymlocations[0] = "Parnell Street Dublin";
                gymlocations[1] = "Arjun Nagar,Agra,India";
                gymlocations[2] = "Malakpet,Hyderabad, India";
                gymlocations[3] = "Lokhandwala Circle,Mumbai,India";
                gymlocations[4] = "Cape Town City Center,Cape Town";
                gymlocations[5] = "Times Square, Newyork";
                gymlocations[6] = "Swinburne Avenue,Victoria, Australia";

                geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        map.setCenter(results[0].geometry.location);
                        var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location
                        });

                        if (address == gymlocations[0]) {

                            document.getElementById('l1').innerHTML = gymlocations[0] + 'Tel: 01-2323456';

                        }
                        if (address == gymlocations[1]) {
                            document.getElementById('l1').innerHTML = gymlocations[1] + ' Tel: 01 45443321';

                        }
                        if (address == gymlocations[2]) {
                            document.getElementById('l1').innerHTML = gymlocations[2] + ' Tel: 01 7675432';

                        }

                        if (address == gymlocations[3]) {
                            document.getElementById('l1').innerHTML = gymlocations[3] + ' Tel: 01 7775432';

                        }

                        if (address == gymlocations[4]) {
                            document.getElementById('l1').innerHTML = gymlocations[4] + ' Tel: 01 3475432';

                        }

                        if (address == gymlocations[5]) {
                            document.getElementById('l1').innerHTML = gymlocations[5] + ' Tel: 045 9995432';

                        }

                        if (address == gymlocations[6]) {
                            document.getElementById('l1').innerHTML = gymlocations[6] + ' Tel: 01 5435432';

                        }
                    }
                    else {
                        alert("Not successful for the following reason: " + status);
                    }
                });
            }


        }//actions

    }
);


