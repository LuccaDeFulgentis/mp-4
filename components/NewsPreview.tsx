import { NewsProps } from "@/types";

export default function NewsPreview({ news }: { news: NewsProps }) {
    return (
        <div className="bg-blue-200 rounded-xl p-4 w-96">
            <h2 className="font-bold text-xl text-black">{news.title}</h2>
            <p className="text-gray-700">{news.description}</p>
            <a className="text-gray-700" href={news.link}>Read More</a>
        </div>
    );
}