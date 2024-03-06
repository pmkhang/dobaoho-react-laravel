import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const SliderImages = () => {
    const splideOptions = {
        type: "loop",
        rewind: true,
        perPage: 1,
        arrows: true,
        pagination: false,
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
    };
    return (
        <div className="w-full flex items-center justify-center col-span-3 rounded-xl shadow-lg">
            <Splide options={splideOptions}>
                <SplideSlide className="rounded-lg">
                    <img
                        src="https://bizweb.dktcdn.net/100/280/929/files/do-bao-ho-lao-dong-la-gi.jpg?v=1664342316806"
                        alt=""
                        className="w-full h-[457px] object-cover rounded-lg"
                    />
                </SplideSlide>
                <SplideSlide className="rounded-lg">
                    <img
                        src="https://theme.hstatic.net/200000379259/1001061527/14/slideshow_2.jpg?v=197"
                        alt=""
                        className="w-full h-[457px] object-cover rounded-lg"
                    />
                </SplideSlide>
                <SplideSlide className="rounded-lg">
                    <img
                        src="https://dongphucbaoan.vn/wp-content/uploads/2021/07/cac-loai-quan-ao-bao-ho-lao-dong-01.jpg"
                        alt=""
                        className="w-full h-[457px] object-cover rounded-lg"
                    />
                </SplideSlide>
                <SplideSlide className="rounded-lg">
                    <img
                        src="https://jobsgo.vn/blog/wp-content/uploads/2022/01/Quan-ao-dong-phuc-cong-nhan-GLU_158-1.jpg"
                        alt=""
                        className="w-full h-[457px] object-cover rounded-lg"
                    />
                </SplideSlide>
                <SplideSlide className="rounded-lg">
                    <img
                        src="https://baoholongchau.com/image/34/images/quan-ao-cong-nhan-xay-dung.jpg"
                        alt=""
                        className="w-full h-[457px] object-cover rounded-lg"
                    />
                </SplideSlide>
                <SplideSlide className="rounded-lg">
                    <img
                        src="https://thienbang.com/wp-content/uploads/2017/04/Banner-quan-ao-bao-ho-2.jpg"
                        alt=""
                        className="w-full h-[457px] object-cover rounded-lg"
                    />
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default SliderImages;
