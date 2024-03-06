import React from "react";

const ProductImageDetail = () => {
    return (
        <div className="w-full flex flex-col col-span-2 gap-4  rounded-xl p-4">
            <div className="w-full border-b-2">
                <img
                    id="mainImage"
                    className="w-full h-[350px] p-4 object-contain rounded-t-lg"
                    src="https://img.lazcdn.com/g/p/a63e8931ab32a237f711c97e779fdae4.jpg_960x960q80.jpg_.webp"
                    alt="product image"
                />
            </div>
            <div className="w-full flex items-center gap-4">
                <div className=" rounded-lg">
                    <img
                        id="image"
                        className="w-[80px] h-[80px] @if ($i == 1) border-2 border-blue-600 @endif p-2 object-contain rounded-lg"
                        src="https://img.lazcdn.com/g/p/a63e8931ab32a237f711c97e779fdae4.jpg_960x960q80.jpg_.webp"
                        alt="product image"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductImageDetail;
