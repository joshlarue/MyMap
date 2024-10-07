export default function getPos() {
  return new Promise((resolve, reject) => {
    const options = {
      enableHighAccuracy: true,
      //timeout: 5000,
      maximumAge: Infinity,
    };

    const success = (pos) => {
      const crd = pos.coords;

      console.log("Current position is");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`with an accuracy of +- ${crd.accuracy} meters.`);
      resolve(crd);
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      reject(err);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
}
