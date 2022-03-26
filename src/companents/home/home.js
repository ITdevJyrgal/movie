import React from "react";
import Slider from "react-slick";
import "./home.css"

export default function SimpleSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="container mx-auto p-10 ">

            <div>
                <h1 className="pt-32  text-3xl color text-white">Рекомендуем вам посмотреть</h1>
            </div>
            <Slider {...settings}>
                <div>
                    <img className="my-16 ml-24 border-4 outline-none p-3 rounded-lg "
                         src="https://thumbs.dfs.ivi.ru/storage8/contents/3/b/f639384fc2f7602f29d4f7c199c0e5.jpg/1216x370/"
                         alt=""/>
                </div>
                <div>
                    <img className="my-16 ml-24 border-4 outline-none p-3 rounded-lg "
                         src="https://thumbs.dfs.ivi.ru/storage4/contents/f/5/47a7349b0c60cc5bee1504697c1231.jpg/1216x370/"
                         alt=""/>
                </div>
                <div>
                    <img className="my-16 ml-24 border-4 outline-none p-3 rounded-lg "
                         src="https://thumbs.dfs.ivi.ru/storage8/contents/3/b/f639384fc2f7602f29d4f7c199c0e5.jpg/1216x370/"
                         alt=""/>
                </div>
                <div>
                    <img className="my-16 ml-24 border-4 outline-none p-3 rounded-lg "
                         src="https://thumbs.dfs.ivi.ru/storage4/contents/f/5/47a7349b0c60cc5bee1504697c1231.jpg/1216x370/"
                         alt=""/>
                </div>
                <div>
                    <img className="my-16 ml-24 border-4 outline-none p-3 rounded-lg "
                         src="https://thumbs.dfs.ivi.ru/storage8/contents/3/b/f639384fc2f7602f29d4f7c199c0e5.jpg/1216x370/"
                         alt=""/>
                </div>
                <div>
                    <img className="my-16 ml-24 border-4 outline-none p-3 rounded-lg "
                         src="https://thumbs.dfs.ivi.ru/storage4/contents/f/5/47a7349b0c60cc5bee1504697c1231.jpg/1216x370/"
                         alt=""/>
                </div>
            </Slider>


        </div>
    );
}