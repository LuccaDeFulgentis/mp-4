export default async function getNews(){
    const APIKey = process.env.NEWS_API_KEY;

    const response = await fetch(`https://newsdata.io/api/1/latest?apikey=${APIKey}`);

    if (!response.ok) { //Errors for rate limit and server limit
        throw new Error("Connection Error");
    }

    const data = await response.json();

    if (data.status !== "success") { // The data has an error
        throw new Error("API returned an error");
    }

    return data;
}