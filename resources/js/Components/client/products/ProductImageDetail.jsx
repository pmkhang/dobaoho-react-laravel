import React from "react";

const ProductImageDetail = () => {
    return (
        <div className="w-full flex flex-col col-span-2 max-tl:col-span-5 gap-4  rounded-xl p-4">
            <div className="w-full border-b-2">
                <img
                    id="mainImage"
                    className="w-full h-[350px] p-4 object-contain rounded-t-lg"
                    src="https://img.lazcdn.com/g/p/a63e8931ab32a237f711c97e779fdae4.jpg_960x960q80.jpg_.webp"
                    alt="product image"
                />
            </div>
            <div className="w-full grid grid-cols-5 items-center gap-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="rounded-lg">
                        <img
                            id="image"
                            className="w-[60px] h-[60px] border-2 border-blue-600 p-2 object-contain rounded-lg"
                            src="https://img.lazcdn.com/g/p/a63e8931ab32a237f711c97e779fdae4.jpg_960x960q80.jpg_.webp"
                            alt="product image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImageDetail;
