import React from "react";

const ProductDescDetail = ({ desc }) => {
    return (
        <div className="col-span-5 mt-10 px-4 border-t-2 pt-8">
            <h3 className="text-3xl font-bold mb-8">Thông tin sản phẩm:</h3>
            <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: desc }}
            ></div>
        </div>
    );
};

export default ProductDescDetail;
