"use client";
//next.js automatticaly directs to this page if there is an error with the api

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold text-red-500">
                Something went wrong!
            </h1>
        </div>
    );
}