Blogger.VencanvasController = Ember.Controller.extend(
    {
        vendata: {
            "container_1": [

                {
                    "label": "Free Stroke",
                    "y": 18,
                    "name": "Free Stroke"
                },
                {
                    "label": "Breast Stroke",
                    "y": 29,
                    "name": "Breast Stroke"
                },
                {
                    "label": "Back Stroke",
                    "y": 40,
                    "name": "Back Stroke"
                },
                {
                    "label": "Butterfly Stroke",
                    "y": 34,
                    "name": "Butterfly Stroke"
                },
                {
                    "label": "Side Stroke",
                    "y": 24,
                    "name": "Side Stroke"
                }
            ],

            "container_2": [
                {
                    "label": "Freestyle Stroke",
                    "y": 18
                },
                {
                    "label": "Breast Stroke",
                    "y": 29
                },
                {
                    "label": "Back Stroke",
                    "y": 40
                },
                {
                    "label": "Butterfly Stroke",
                    "y": 34
                },
                {
                    "label": "Side Stroke",
                    "y": 24
                }
            ],
            "container_3": {
                "dataset_1": [
                    {
                        "label": "January",
                        "y": 4500
                    },
                    {
                        "label": "February",
                        "y": 3250
                    },
                    {
                        "label": "March",
                        "y": 4000
                    },
                    {
                        "label": "April",
                        "y": 3740
                    },
                    {
                        "label": "May",
                        "y": 2400
                    }
                ],
                "dataset_2": [
                    {
                        "label": "January",
                        "y": 5400
                    },
                    {
                        "label": "February",
                        "y": 3100
                    },
                    {
                        "label": "March",
                        "y": 2870
                    },
                    {
                        "label": "April",
                        "y": 3400
                    },
                    {
                        "label": "May",
                        "y": 2380
                    }
                ]
            }
        },
        actions: {

           
            //
            workoutStatistics: function () {

                var chart1 = new CanvasJS.Chart("chartContainer_1", {
                    theme: "theme1",
                    title: {
                        text: "Exercise type [%]",
                        fontWeight: "bolder",
                        fontColor: "#0D8AAA",
                        fontFamily: "tahoma",
                        fontSize: 20,
                        padding: 10
                    },
                    data: [//array of dataSeries
                        { //dataSeries object

                            /*** Change type "column" to "bar", "area", "line" or "pie"***/
                            type: "doughnut",
                            indexLabelPlacement: "outside",
                            showInLegend: true,
                            dataPoints: this.vendata['container_1']
                        }
                    ]
                });
                chart1.render();
                chart1 = {};
            },

            workoutStatistics1: function () {

                var chart2 = new CanvasJS.Chart("chartContainer_1", {
                    theme: "theme1",
                    title: {
                        text: " Total Workout [min]",
                        fontWeight: "bolder",
                        fontColor: "#0D8AAA",
                        fontFamily: "tahoma",
                        fontSize: 20,
                        padding: 10
                    },
                    data: [//array of dataSeries
                        { //dataSeries object

                            /*** Change type "column" to "bar", "area", "line" or "pie"***/
                            type: "bar",
                            dataPoints: this.vendata['container_2']

                        }
                    ]
                });
                chart2.render();
                chart2 = {};
            },


            workoutStatistics2: function () {

                var chart3 = new CanvasJS.Chart("chartContainer_1", {

                    theme: "theme1",

                    title: {
                        text: "Total calories burned [kcal]",
                        fontWeight: "bolder",
                        fontColor: "#0D8AAA",
                        fontFamily: "tahoma",
                        fontSize: 20,
                        padding: 10
                    },

                    data: [  //array of dataSeries
                        { //dataSeries - first quarter
                            /*** Change type "column" to "bar", "area", "line" or "pie"***/
                            type: "column",
                            name: "You",
                            showInLegend: true,
                            dataPoints: this.vendata['container_3']['dataset_1']
                        },

                        { //dataSeries - second quarter

                            type: "column",
                            name: "Average user",
                            showInLegend: true,
                            dataPoints: this.vendata['container_3']['dataset_2']
                        }
                    ],
                    /** Set axisY properties here*/
                    axisY: {
                        suffix: "kcal"
                    }
                });
                chart3.render();
                chart3 = {};
            }

        }

    });

