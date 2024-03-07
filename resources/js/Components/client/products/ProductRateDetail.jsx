import React from "react";

const CustommerRate = () => {
    return (
        <div className="my-4 flex gap-4 py-4">
            <img
                className="w-[60px] h-[60px] rounded-full object-contain border-2"
                src="https://img.lazcdn.com/g/p/a63e8931ab32a237f711c97e779fdae4.jpg_960x960q80.jpg_.webp"
                alt="avatar-user"
            />
            <div className="flex flex-col ">
                <strong className="text-lg">Tên khách hàng: </strong>
                <i>Thời gian</i>
                <div className="flex gap-2">
                    <span>Đánh giá:</span>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <i className="fa-solid fa-star text-black"></i>
                    </div>
                </div>
                <span className="text-lg">
                    Tiêu đề:
                    <strong>Lorem ipsum dolor sit amet</strong>
                </span>
                <span className="text-lg">
                    Nội dung:
                    <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo a debitis quaerat doloribus, beatae animi
                        consectetur expedita! Earum.
                    </strong>
                </span>
            </div>
        </div>
    );
};
const ProductRateDetail = () => {
    return (
        <div className="col-span-5 mt-10 px-4">
            <h3 className="text-3xl font-bold">Đánh giá sản phẩm:</h3>

            {[...Array(5)].map((_, i) => (
                <CustommerRate key={i} />
            ))}
        </div>
    );
};

export default ProductRateDetail;
