import React from "react";
import { Avatar, Blockquote, Rating } from "flowbite-react";

const CustommerRate = () => {
    return (
        <figure className="w-full border-2 rounded-lg p-4">
            <figcaption className="flex items-center space-x-3">
                <Avatar
                    rounded
                    size="xs"
                    img="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-300">
                    <cite className="pr-3 font-medium text-gray-900 ">
                        Custommer name
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        Times
                    </cite>
                </div>
            </figcaption>
            <div className="my-4 flex items-center">
                <Rating size="sm">
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                </Rating>
            </div>

            <Blockquote>
                <p className="text-base font-semibold text-gray-900 ">
                    "Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                </p>
            </Blockquote>
        </figure>
    );
};
const ProductRateDetail = () => {
    return (
        <div className="col-span-5 mt-10 px-4">
            <div className="flex flex-col gap-4 my-4">
                {[...Array(5)].map((_, i) => (
                    <CustommerRate key={i} />
                ))}
            </div>
        </div>
    );
};

export default ProductRateDetail;
