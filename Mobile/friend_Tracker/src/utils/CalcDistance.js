const calcDistance = (latitude1, latitude2, longitude1, longitude2) => {
    const radius = 6371;

    const lat1 = latitude1;
    const lat2 = latitude2;
    const lon1 = longitude1;
    const lon2 = longitude2;

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * (Math.PI / 180))) * Math.cos((lat2 * (Math.PI / 180))) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;

    const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radius * center;

    return distance;
}


export default calcDistance;