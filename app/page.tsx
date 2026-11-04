import getNews from "@/lib/getAllNews";
import NewsDisplay from "@/components/NewsDisplay";

export const instant = false;

export default async function Home() {
    const data = await getNews();

    return (
        <div className="flex flex-col items-center bg-blue-100 p-4">
            <h1 className="text-3xl font-bold text-black">Latest News</h1>
            <NewsDisplay inputNews={data.results} />
        </div>
    );
}