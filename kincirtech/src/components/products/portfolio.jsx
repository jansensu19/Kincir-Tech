import ilios from "../../assets/img/ilios.png";
import homeandliving from "../../assets/img/homeandliving.png";
import hippo from "../../assets/img/hippo.png";

export default function portfolio() {
  return (
    <section class="py-8" id="Portfolio">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="mb-8 lg:mb-16 items-center">
          <p class="text-gray-500 sm:text-xl text-center">Portfolio</p>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-center">
            The software that we build takes our clients to the next level
          </h2>
        </div>

        <div class="space-y-8 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div class="border-4 border-gray-300 rounded-lg hover:border-yellow-300 px-4 py-4">
            <div class="flex mx-auto justify-center items-center mb-6  rounded-full bg-primary-100">
              <img class="rounded-lg" src={ilios} alt="" />
            </div>
            <p class="text-gray-400 sm:text-medium">Mobile apps</p>
            <h3 class="mb-2 text-xl font-bold text-yellow-300">
              Indexing app (B2B E-commerce)
            </h3>
            <p class="text-gray-500">
              Has a unique selling piont where not all companies offer
              applications for sales, data collection and management.
            </p>
          </div>

          <div class="border-4 border-gray-300 rounded-lg hover:border-yellow-300 px-4 py-4">
            <div class="flex mx-auto justify-center items-center mb-6  rounded-full bg-primary-100">
              <img class="rounded-lg" src={homeandliving} alt="" />
            </div>
            <p class="text-gray-400 sm:text-medium">Website development</p>
            <h3 class="mb-2 text-xl font-bold text-yellow-300">
              Home and Living
            </h3>
            <p class="text-gray-500">
            Kincir Tech helps in creating a website catalog to show brand
              identity and information in accordance with vision and mission of
              Home and Living.
            </p>
          </div>

          <div class="border-4 border-gray-300 rounded-lg hover:border-yellow-300 px-4 py-4">
            <div class="flex mx-auto justify-center items-center mb-6  rounded-full bg-primary-100">
              <img class="rounded-lg" src={hippo} alt="" />
            </div>
            <p class="text-gray-400 sm:text-medium">Website development</p>
            <h3 class="mb-2 text-xl font-bold text-yellow-300">HyperStone</h3>
            <p class="text-gray-500">
              Kincir Tech help to create e-commerce and company profile for HyperStone's
              Website with realtime transaction and integration with Payment
              Gateway to accept multi payment.
            </p>
          </div>
        </div>
        <div class="mt-4 px-8 py-4 md:py-6 md:px-10 md:text-lg text-center">
          <a
            href="#"
            class="rounded-full border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-black hover:bg-yellow-300 md:py-4 md:px-10 md:text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
