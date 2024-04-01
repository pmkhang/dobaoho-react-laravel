import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";

const Introduce = () => {
    return (
        <ClientLayout title={"Giới thiệu"}>
            <div className="w-full bg-white min-h-[605px] rounded-md shadow-md mb-4 p-8">
                <h2 className="text-2xl font-bold uppercase text-center">
                    Giới thiệu
                </h2>
                <div className="w-3/5 max-tl:w-full mx-auto text-start mt-4 text-lg flex flex-col items-center justify-center gap-6">
                    <p>
                        Chào mừng bạn đến với{" "}
                        <strong>Công ty Quang Trường Thịnh</strong>. Chúng tôi
                        chuyên sản xuất và kinh doanh thiết bị bảo hộ lao động
                        như các thiết bị bảo vệ mắt, bảo vệ đầu, bảo vệ tai, bảo
                        vệ hô hấp, giày bảo hộ, đồng phục bảo hộ và một số thiết
                        bị bảo hộ khác.
                    </p>
                    <p>
                        Trong đời đại công nghiệp máy móc hiện đại phát triển,
                        khoa học kỹ thuật tiên tiến thì nhu cầu trang bị những
                        sản phẩm bảo hộ an toàn trong lao động luôn được con
                        người chú trọng và được xem như là một trong những thước
                        đo tiêu chuẩn trong sản xuất của doanh nghiệp.
                    </p>
                    <p>
                        Để đáp ứng nhu cầu đa dạng của từng doanh nghiệp, thị
                        trường bảo hộ lao động không ngừng phát triển theo sự
                        phát triển nhanh chóng của khoa học kỹ thuật, các mẫu
                        mã, sản phẩm ngày càng đa dạng và phong phú. Cùng với sự
                        phát triển của ngành hàng, Quang Trường Thịnh luôn cập
                        nhật xu thế, cập nhật những sản phẩm mới nhất, hiện đại
                        nhất có chất lượng cao, giá cả cạnh tranh để đáp ứng nhu
                        cầu tiêu dùng của cá nhân, doanh nghiệp trên toàn quốc.
                    </p>
                    <p>
                        Với mong muốn đem đến sự an toàn tuyệt đối cho người lao
                        động, cùng với phương châm: “Chất lượng đầu ngành – Giá
                        cả cạnh tranh” chúng tôi cam kết sẽ làm quý khách hàng
                        hài lòng về chất lượng sản phẩm với mức giá cạnh tranh
                        nhất.
                    </p>
                    <div className="w-full flex flex-col text-start">
                        <p>
                            Mọi chi tiết xin vui lòng liên hệ với chúng tôi để
                            được phục vụ tốt nhất:
                        </p>
                        <strong>CÔNG TY TNHH QUANG TRƯỜNG THỊNH</strong>
                        <ul className="ml-10">
                            <li>
                                <i className="mr-4">•</i> VPGĐ: 12/1/22/22 Đường
                                số 10, Phường 9, Quận Gò Vấp, Tp.HCM
                            </li>
                            <li>
                                <i className="mr-4">•</i> Điện thoại: 0938505459
                            </li>
                            <li>
                                <i className="mr-4">•</i> MST: 0315404888
                            </li>
                            <li>
                                <i className="mr-4">•</i> Hotline: 0938505459
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
                </div>
            </div>
        </ClientLayout>
    );
};

export default Introduce;
