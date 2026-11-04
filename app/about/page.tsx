import getNews from "@/lib/getAllNews";

export const instant = false;

export default async function AboutPage(){

    const data = await getNews();

    return (
        <div className="flex flex-col justify-center items-center bg-blue-200 p-4 text-black h-screen">
            <h1>Welcome to CS303 News APP</h1>
            <p>This application has news in every language! Hopefully you understand the current reload!</p>
            <p>Total available articles: {data.totalResults}</p>
        </div>
        
    );
}