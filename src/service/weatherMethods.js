const url = process.env.REACT_APP_NODE_URL;

export const getWeather = async ( ) => {
    const rawResponse = await fetch(`${url}/${city}`);
    return await rawResponse.json();
};

