export default () => {
  try {
    const geoLocation = navigator.geolocation;

    return new Promise((resolve, reject) => {
      geoLocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
      });
    });
  } catch (error) {
    return error;
  }
};
