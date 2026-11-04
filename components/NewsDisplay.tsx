"use client";

import { NewsProps } from "@/types";
import { useState } from "react";
import NewsPreview from "./NewsPreview";

export default function NewsDisplay({
    inputNews,
}: {
    inputNews: NewsProps[];
}) {
    const [news, setNews] = useState(inputNews);

    return (
    <div className="flex justify-center bg-white p-4 rounded-xl">
        <div className="flex flex-wrap justify-center gap-4">
            {news.map((n) => (
                <NewsPreview key={n.article_id} news={n} />
            ))}
        </div>
    </div>
    );
}