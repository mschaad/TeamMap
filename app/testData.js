window.testData = (function() { 
    function random(range) {
        return range.min + (range.max - range.min) * Math.random()
    }
    
    var latitudeRange = { min: 28.696, max: 48.317 };
    var longitudeRange = { max: -76.515, min: -118.692 };

    function getTestData() {
        var a = [];
        var dataPoints = 100;
        for (var i=0; i < dataPoints; i++) {
            a.push(getPoint());
        }
        return a;
    }

    function getPoint() {
        return {
            latitude: random(latitudeRange),
            longitude: random(longitudeRange)
        };
    }

    return {
        getTestData: getTestData,
        getPoint: getPoint
    };
}());