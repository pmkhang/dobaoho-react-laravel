import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";

const Introduce = () => {
    return (
        <ClientLayout title={"Giới thiệu"}>
            <div className="w-full bg-white min-h-[605px] rounded-md shadow-md mb-4 p-8">
                <h2 className="pl-4 border-l-4 border-blue-600 w-5/6 max-tl:w-full mx-auto text-2xl font-bold uppercase">
                    Giới thiệu
                </h2>
                <div className="w-5/6 max-tl:w-full mx-auto text-start mt-4 text-lg flex flex-col items-center justify-center gap-6">
                    <div className="flex items-center gap-4">
                        <p>
                            Chào mừng bạn đến với{" "}
                            <strong>Công ty Quang Trường Thịnh</strong>. Chúng
                            tôi chuyên sản xuất và kinh doanh thiết bị bảo hộ
                            lao động như các thiết bị bảo vệ mắt, bảo vệ đầu,
                            bảo vệ tai, bảo vệ hô hấp, giày bảo hộ, đồng phục
                            bảo hộ và một số thiết bị bảo hộ khác.
                            <br />
                            <br /> Trong đời đại công nghiệp máy móc hiện đại
                            phát triển, khoa học kỹ thuật tiên tiến thì nhu cầu
                            trang bị những sản phẩm bảo hộ an toàn trong lao
                            động luôn được con người chú trọng và được xem như
                            là một trong những thước đo tiêu chuẩn trong sản
                            xuất của doanh nghiệp.
                        </p>
                        <img
                            src="/uploads/introduce1.jpg"
                            alt="introduce1"
                            className="h-[300px] object-contain rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex items-center gap-8">
                        <img
                            src="/uploads/introduce2.jpg"
                            alt="introduce2"
                            className="h-[360px] object-contain rounded-lg shadow-lg"
                        />
                        <p>
                            Để đáp ứng nhu cầu đa dạng của từng doanh nghiệp,
                            thị trường bảo hộ lao động không ngừng phát triển
                            theo sự phát triển nhanh chóng của khoa học kỹ
                            thuật, các mẫu mã, sản phẩm ngày càng đa dạng và
                            phong phú. Cùng với sự phát triển của ngành hàng,
                            Quang Trường Thịnh luôn cập nhật xu thế, cập nhật
                            những sản phẩm mới nhất, hiện đại nhất có chất lượng
                            cao, giá cả cạnh tranh để đáp ứng nhu cầu tiêu dùng
                            của cá nhân, doanh nghiệp trên toàn quốc.
                            <br />
                            <br />
                            Với mong muốn đem đến sự an toàn tuyệt đối cho người
                            lao động, cùng với phương châm: “Chất lượng đầu
                            ngành – Giá cả cạnh tranh” chúng tôi cam kết sẽ làm
                            quý khách hàng hài lòng về chất lượng sản phẩm với
                            mức giá cạnh tranh nhất.
                        </p>
                        <p></p>
                    </div>

                    <div className="w-full flex items-center gap-8 ">
                        <div className="flex flex-col text-start gap-2">
                            <p>
                                Mọi chi tiết xin vui lòng liên hệ với chúng tôi
                                để được phục vụ tốt nhất:
                            </p>
                            <strong className="text-xl">
                                CÔNG TY TNHH QUANG TRƯỜNG THỊNH
                            </strong>
                            <ul className="ml-10">
                                <li>
                                    <i className="mr-4">•</i> VPGĐ: 12/1/22/22
                                    Đường số 10, Phường 9, Quận Gò Vấp, Tp.HCM
                                </li>
                                <li>
                                    <i className="mr-4">•</i> Điện thoại:
                                    0938505459
                                </li>
                                <li>
                                    <i className="mr-4">•</i> MST: 0315404888
                                </li>
                                <li>
                                    <i className="mr-4">•</i> Hotline:
                                    0938505459
                                </li>
                                <li>
                                    <i className="mr-4">•</i> Email:
                                    quangtruongthinh79@gmail.com
                                </li>
                                <li>
                                    <i className="mr-4">•</i> Website:
                                    quantruongthinh.vn
                                </li>
                            </ul>
                        </div>
                        <img
                            src="/uploads/introduce3.jpg"
                            alt="introduce3"
                            className="h-[360px] object-contain rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
};

export default Introduce;
