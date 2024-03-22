import React from "react";

const ProductImageDetail = ({ images }) => {
    return (
        <div className="w-full flex flex-col col-span-2 max-tl:col-span-5 gap-4  rounded-xl p-4">
            <div className="w-full rounded-lg border-2 ">
                <img
                    id="mainImage"
                    className="w-full h-[420px]  object-cover rounded-lg"
                    src={images[0]?.image}
                    alt="product image"
                />
            </div>
            <div className="w-full flex items-center gap-4">
                {images?.slice(1).map((i, index) => (
                    <div key={i?.id} className="rounded-lg">
                        <img
                            id={i?.id}
                            className={`w-[60px] h-[60px] p-0.5 object-cover rounded-lg  ${
                                index == 0 ? "border-2 border-blue-800" : ""
                            }`}
                            src={i?.image}
                            alt={i?.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImageDetail;
