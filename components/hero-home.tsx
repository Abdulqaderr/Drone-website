import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#9bacbc,#cca989,#e8e8e8,#cca989,#9bacbc)] bg-[length:200%_auto] bg-clip-text pb-5 font-tektur text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Drone Based Services
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-[#9bacbc]/80"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Cutting-edge drone technology solutions for aerial photography,
                surveying, inspection, and precision services that deliver
                speed, balance, and accuracy.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-[#1e2a32] to-[#2b3943] bg-[length:100%_100%] bg-[bottom] text-[#cca989] shadow-[inset_0px_1px_0px_0px_rgba(155,172,188,0.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Get Started
                      <span className="ml-1 tracking-normal text-[#cca989]/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-[#3a4a55] to-[#2b3943]/60 bg-[length:100%_100%] bg-[bottom] text-[#9bacbc] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,#3a4a55,#4a5a65,#3a4a55)_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="SRAB Drone Services"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
