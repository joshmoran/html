const url = 'http://192.168.0.220:3001';
const city = 'winlaton';

export const getWeather = async ( ) => {
    const rawResponse = await fetch(`${url}/${city}`);
    return await rawResponse.json();
};

