type complaints = {
  name: string;
  lat: number;
  lon: number;
};

export const generateRandomPoint = (
  lat: number,
  lon: number,
  radiusInKm: number,
) => {
  const radiusInDegrees = radiusInKm / 111;
  const u = Math.random();
  const v = Math.random();
  const w = radiusInDegrees * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const deltaLat = w * Math.cos(t);
  const deltaLon = (w * Math.sin(t)) / Math.cos(lat * (Math.PI / 180));

  return {
    lat: lat + deltaLat,
    lon: lon + deltaLon,
    name: `Generated Location`,
  };
};

export const generateMoreComplaints = (
  baseComplaints: complaints[],
  numberOfPoints: number,
  radiusInKm: number,
) => {
  const moreComplaints: complaints[] = [];
  baseComplaints.forEach(({ lat, lon }) => {
    for (let i = 0; i < numberOfPoints; i++) {
      moreComplaints.push(generateRandomPoint(lat, lon, radiusInKm));
    }
  });
  return moreComplaints;
};
