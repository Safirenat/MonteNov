import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "./Reviews.scss";

export const Reviews = () => {
	return (
		<div className="reviews-wrapper">
			<div className="container">
				<h1 className="reviews-title">Отзывы</h1>
				<Swiper
					pagination={{
						type: "fraction",
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="reviews">
							<div className="reviews-slider">
								<div>
									<h4 className="reviews-slider-title">
										Анна Т.
									</h4>
								</div>
								<div>
									<p className="reviews-slider-text">
										Мысль о переезде в Черногорию пришла ко
										мне 5 лет назад. В интернете было много
										информации о том, что здесь довольно
										легко получить ВНЖ в сравнении с другими
										странами, поэтому я была уверена, что
										обойдусь своими силами. Однако я пошла
										по не совсем верному пути, не учтя
										некоторые нюансы, и в итоге все-таки
										обратилась за помощью к специалистам. И
										лучше бы сделала это сразу, а то столько
										времени и нервов потеряла! Огромное
										спасибо за доброе отношение и
										индивидуальный подход к ситуации!
									</p>
									<div className="reviews-slider-text-mod"></div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="reviews">
							<div className="reviews-slider">
								<div>
									<h4 className="reviews-slider-title">
										Дмитрий Б.
									</h4>
								</div>
								<div>
									<p className="reviews-slider-text">
										Переезжал вместе с девушкой, сразу
										рассматривали вариант с ВНЖ на основании
										открытия совместной фирмы. Когда стали
										обращаться в разные компании, которая
										помогают с оформлением документов, то
										цены на открытие фирмы и дальнейшее ее
										обслуживание нас неприятно удивили. Вы
										были первыми, кто предложил прайс,
										который не ударил по карману. Также
										хотелось бы отметить качественную работу
										бухгалтера, он прекрасно ориентируется в
										местном законодательстве и изменениях в
										нем. Что сказать, будем сотрудничать
										дальше!
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="reviews">
							<div className="reviews-slider">
								<div>
									<h4 className="reviews-slider-title">
										Ирина А.
									</h4>
								</div>
								<div>
									<p className="reviews-slider-text">
										Когда я приехала в прошлом году на отдых
										с детьми, то страна настолько влюбила в
										себя, что обратно уезжать уже не
										захотелось. Вашу фирму посоветовали
										знакомые, ну очень тепло отзывались о
										вашей работе. Ребята, вы космос! Я
										всегда теряюсь, когда приходится иметь
										дело с документами, спасибо, что взяли
										это на себя! И отдельное спасибо за
										моральную поддержку, с вами никакой
										психолог не нужен :)
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
