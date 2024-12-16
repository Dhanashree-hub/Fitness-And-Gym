import TertiaryHeading from "../../headings/TertiaryHeading";

import mountain from "../../../images/about-page/mission.png";
import target from "../../../images/about-page/History.png";
import img1 from "../../../images/about-page/img1.webp";
import img2 from "../../../images/about-page/img2.webp";

function History() {
  return (
    <section className="bg-[url('./images/about-page/bg.png')] bg-cover px-6 py-32 text-center">
      <div className="container grid shadow-2xl xl:grid-cols-2 ">
        <div className="flex h-full flex-col gap-4 self-center bg-white p-4">
          <img
            src={target}
            alt=""
            className="hover:rotate-y-180 mx-auto w-32 transition-all duration-700"
          />
          <TertiaryHeading>Our history</TertiaryHeading>
          <p className="font-medium text-gray-300">
          Gold’s Gym Fitness Institute was started on World Health Day on 7th April 2006. It’s been more than a decade of educating people in fitness. Every year 1000+ students pass out of the institute. Gold’s Gym Fitness Institute offers the most exciting and up-to-date curriculum as well as ongoing training in all aspects of the fitness industry.
         </p>
        </div>

        <div className="overflow-hidden">
          <img
            src={img1}
            alt=""
            className="h-full transition-all duration-300 hover:scale-110"
          />
        </div>

        <div className="flex h-full flex-col gap-4 self-center bg-white p-4 xl:order-4">
          <img
            src={mountain}
            alt=""
            className="hover:rotate-y-180 mx-auto transition-all duration-700"
          />
          <TertiaryHeading>Our Mission</TertiaryHeading>
          <p className="font-medium text-gray-300">
          Golds Gym mission is to help people reach their fitness goals and live healthier lives. They also aim to build a community of trainers who are empathetic, skilled, and experienced, and who understand that fitness is a continuous journey. 
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src={img2}
            alt=""
            className="h-full transition-all duration-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default History;
