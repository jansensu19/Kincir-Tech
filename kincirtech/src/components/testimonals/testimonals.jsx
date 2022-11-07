import testi1 from "../../assets/img/testi1.jpg";

export default function testimonals() {
  return (
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm">
          <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
            Testimonals
          </p>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            What clients love in working with Albatech Team
          </h2>
        </div>
        <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 class="text-lg font-semibold text-gray-900">
                Amazing People
              </h3>
              <p class="my-4">"They are people who are not only following</p>
              <p class="my-4">the tast, but can work as a team. Together."</p>
            </blockquote>
            <figcaption class="flex justify-center items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                src={testi1}
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium text-left">
                <div>Matthijs Piest</div>
                <div class="text-sm font-light text-gray-500">
                  COO at WieBetaaltWat
                </div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 class="text-lg font-semibold text-gray-900">
                Amazing People
              </h3>
              <p class="my-4">"They are people who are not only following</p>
              <p class="my-4">the tast, but can work as a team. Together."</p>
            </blockquote>
            <figcaption class="flex justify-center items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                src={testi1}
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium text-left">
                <div>Matthijs Piest</div>
                <div class="text-sm font-light text-gray-500">
                  COO at WieBetaaltWat
                </div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 class="text-lg font-semibold text-gray-900">
                Amazing People
              </h3>
              <p class="my-4">"They are people who are not only following</p>
              <p class="my-4">the tast, but can work as a team. Together."</p>
            </blockquote>
            <figcaption class="flex justify-center items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                src={testi1}
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium text-left">
                <div>Matthijs Piest</div>
                <div class="text-sm font-light text-gray-500">
                  COO at WieBetaaltWat
                </div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12">
            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 class="text-lg font-semibold text-gray-900">
                Amazing People
              </h3>
              <p class="my-4">"They are people who are not only following</p>
              <p class="my-4">the tast, but can work as a team. Together."</p>
            </blockquote>
            <figcaption class="flex justify-center items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                src={testi1}
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium text-left">
                <div>Matthijs Piest</div>
                <div class="text-sm font-light text-gray-500">
                  CCOO at WieBetaaltWat
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="text-center">
          <a
            href="#"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Show more...
          </a>
        </div>
      </div>
    </section>
  );
}
