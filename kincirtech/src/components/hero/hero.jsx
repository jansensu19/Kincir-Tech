

export default function hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-8xl">
        <main className="mx-auto mt-10 max-w-8xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl pb-6 md:text-8xl drop-shadow-xl">
              <span className="block xl:inline drop-shadow-2xl">
                Build or scale up
              </span>{" "}
            </h1>
            <h2 className="text-xl font-normal tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-black-400 xl:inline">
                your development team
              </span>
            </h2>
            <p className="mt-3 text-base font-medium text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              <hr className="my-8 w-20 h-1 rounded border-0 bg-yellow-300"></hr>
              in weeks, not months
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-full border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-black hover:bg-yellow-300 md:py-4 md:px-10 md:text-lg"
                >
                  Book Now
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-6 lg:w-1/2 mt-4">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full rounded-2xl"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
