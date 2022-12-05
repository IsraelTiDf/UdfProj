/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,

        // bl_latitude: '11.847676',
        // bl_longitude: '12.838442',
        // tr_longitude: '109.095887',
        // tr_latitude: '109.149359',
      },
      headers: {
        'x-rapidapi-key': 'c761005cb5msh470ee41ff1fe82ep1c9d71jsnb2e5c463619b',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    // console.log(sw,ne);
    // return alert(data);
    return data;
} catch (error) {
    console.log(error);
  }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
//         params: { lat, lon: lng },
//         headers: {
//           'x-rapidapi-key': 'AIzaSyA2_M--Caf9AX6x-3RFtOOaaypLvOxR4yk',
//           'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//         },
//       });

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
