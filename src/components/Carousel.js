import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

const Carousal = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const items = [
    {
      src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
      headText: "Dental Implant Treatment Only $2999",
      subHeadText: "Request a Complimentary Consultation Today.",
      btnText: "Request Appointment"
    },
    {
      src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png",
      headText: "We Offer a New Patient Special for First Time Patients",
      subHeadText: "Complimentary Teeth Whitening or Electric Toothbrush",
      btnText: "Request Appointment"
    },
    {
      src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png",
      headText: "Open Evenings and Saturdays",
      subHeadText: "Schedule an Appointment for Your Convenience",
      btnText: "Request Appointment"
    },
    {
      src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png",
      headText: "We Offer Cosmetic Injections to Patients ",
      subHeadText: "Cosmetic and Therapeutic Treatment Options",
      btnText: "Request Appointment"
    }
  ];

  const itemLength = items.length - 1;

  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img className="slide-img" src={item.src} alt={item.altText} />
        <div
          class="slide-inner content-on-left  without-overlay "
          style={{backgroundColor: "transparent" }}
        >
          {" "}
          <h2>{item.headText}</h2>{" "}
          <div class="sub-heading-text">
            <p>{item.subHeadText}</p>{" "}
          </div>{" "}
          <div class="slide-only-btn1 slider-btns">
            {" "}
            <a
              href="https://www.nexadental.ca/book-an-appointment"
              class="slide-btn-1"
            >
              {item.btnText}
            </a>{" "}
          </div>{" "}
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="carousel-main">
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
        />
        {carouselItemData}
        <CarouselControl
          directionText="Prev"
          direction="prev"
          onClickHandler={previousButton}
        />
        <CarouselControl
          directionText="Next"
          direction="next"
          onClickHandler={nextButton}
        />
      </Carousel>
      <style>
        {`
            .carousel-main {
                width: 100%;
            }
            .slide-img {
                width: 100%;
                position: reletive;
            }
            @media (min-width: 768px) {
            .slide-inner {
                position: absolute;
                top: 50%;
                left: 95px;
                width: 550px;
                transform: translateY(-50%);
            }}
            .slide-inner {
                background: rgba(255,255,255,.47) !important;
                padding: 30px 15px 35px;
                text-align: center;
            }.slide-inner h2 {
                font-size: 28px;
                line-height: 38px;
                font-weight: 600;
                color: #010101;
                margin: 0px;
                text-shadow: 0px 0px 1px #fff;
            }
            .slide-inner .sub-heading-text p {
                font-size: 18px;
                line-height: 22px;
                color: #000;
                margin: 0px;
                padding: 10px 0 0;
                font-weight: 400;
            }
            .slide-inner .slider-btns a {
                font-size: 16px;
                line-height: 26px;
                padding: 11px 25px;
                color: #fff;
                display: inline-block;
                border-radius: 4px;
                background: #5fb0a7;
                margin: 15px 0px 0px;
                text-transform: uppercase;
                font-weight: 300;
                letter-spacing: 2px;
                text-decoration:none;
            }
            .carousel-control-prev, .carousel-control-next {
                width: 8% !important;
                
            }
            // .carousel-control-prev-icon {
            //     background: #fff;
            //     border-radius: 50%;
            //     box-shadow: 0px 0px 22px rgb(0 0 0 / 30%);
            //     color: black !impotrant;
            //     font-color: black !important;

            // }
          `}
      </style>
    </div>
  );
};

export default Carousal;
