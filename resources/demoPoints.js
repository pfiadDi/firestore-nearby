module.exports = {
    createExamplePoints: (city, n) => {
        let points = [];
        for (let i = 0; i < n; i++) {
            let long = module.exports.randPoint(city.east, city.west);
            let lat = module.exports.randPoint(city.south, city.north);

            points.push({
                long: long,
                lat: lat,
                single: module.exports.joinToFloat(long, lat),
            })
        }
        return points;
    },
    randPoint: (min, max) => {
        return parseFloat((Math.random() * (max - min) + min).toFixed(6));
    },
    rmDecimalPoint: (float) => {
        let parts = `${float}`.split(".");
        if (parts[1].length < 6) {
            parts[1] = `${parts[1]}${"0".repeat(6 - parts[1].length)}` //add zeros to 6 chars which has been ommitted by parseFloat
        }
        return parts.join("");
    },
    joinToFloat: (long, lat) => {
        return parseFloat(`${module.exports.rmDecimalPoint(long)}.${module.exports.rmDecimalPoint(lat)}`)
    }

}

console.log(module.exports.createExamplePoints({
    north: 48.296195,
    south: 48.130363,
    west: 16.235744,
    east: 16.529806
}, 20))