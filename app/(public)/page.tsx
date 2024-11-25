import ContactsComponent from "@/components/Contacts/Contacts";
import Services from "@/components/Properties/Properties";
import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <main id="content flex flex-col">
      <div className="w-full flex items-center justify-center">
        <Slider />
      </div>
      <Services />

      {/* Stats */}
      <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
          <div className="border border-neutral-800 rounded-xl">
            <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                {/* Stats*/}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg className="shrink-0 size-6 sm:size-8 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                    <path d="m21 3 1 11h-2"></path>
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                    <path d="M3 4h8"></path>
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">2,000+</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Arnold Homes partners</p>
                  </div>
                </div>
                {/* End Stats*/}

                {/* Stats*/}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <div className="flex justify-center items-center -space-x-5">
                    <img className="relative z-[2] shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=320&amp;h=320&amp;q=80" alt="Avatar" />
                    <img className="relative z-[1] shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7" src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=320&amp;h=320&amp;q=80" alt="Avatar" />
                    <img className="relative shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=320&amp;h=320&amp;q=80" alt="Avatar" />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">85%</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Happy customers</p>
                  </div>
                </div>
                {/* End Stats*/}

                {/* Stats*/}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg className="shrink-0 size-6 sm:size-8 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
                    <path d="m2 16 6 6"></path>
                    <circle cx="16" cy="9" r="2.9"></circle>
                    <circle cx="6" cy="5" r="3"></circle>
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">$55M+</h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">Mortage managed yearly</p>
                  </div>
                </div>
                {/* End Stats*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Stats */}

      {/* Approach*/}
      <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
          {/* Title*/}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Our approach</h2>
            <p className="mt-1 text-neutral-400">This profound insight guides our comprehensive strategy — from meticulous research and strategic planning to the seamless execution of house development and mortage management.</p>
          </div>
          {/* End Title*/}

          {/* Grid*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&amp;w=480&amp;h=600&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" />
            </div>
            {/* End Col*/}

            {/* Timeline*/}
            <div>
              {/* Heading*/}
              <div className="mb-4">
                <h3 className="text-primary text-xs font-medium uppercase">
                  Steps
                </h3>
              </div>
              {/* End Heading*/}

              {/* Item*/}
              <div className="flex gap-x-5 ms-1">
                {/* Icon*/}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-primary font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>
                {/* End Icon*/}

                {/* Right Content*/}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">Market Research and Analysis:</span>
                    Identify your target audience and understand their needs, preferences, and behaviors.
                  </p>
                </div>
                {/* End Right Content*/}
              </div>
              {/* End Item*/}

              {/* Item*/}
              <div className="flex gap-x-5 ms-1">
                {/* Icon*/}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-primary font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>
                {/* End Icon*/}

                {/* Right Content*/}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">Product Development and Testing:</span>
                    Develop digital products or services that address the needs and preferences of your target audience.
                  </p>
                </div>
                {/* End Right Content*/}
              </div>
              {/* End Item*/}

              {/* Item*/}
              <div className="flex gap-x-5 ms-1">
                {/* Icon*/}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-primary font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                {/* End Icon*/}

                {/* Right Content*/}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">Marketing and Promotion:</span>
                    Develop a comprehensive marketing strategy to promote your digital products or services.
                  </p>
                </div>
                {/* End Right Content*/}
              </div>
              {/* End Item*/}

              {/* Item*/}
              <div className="flex gap-x-5 ms-1">
                {/* Icon*/}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-primary font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>
                {/* End Icon*/}

                {/* Right Content*/}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">Launch and Optimization:</span>
                    Launch your digital products or services to the market, closely monitoring their performance and user feedback.
                  </p>
                </div>
                {/* End Right Content*/}
              </div>
              {/* End Item*/}

              <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-primary font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="#">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                  <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>
                Schedule a call
              </a>
            </div>
            {/* End Timeline*/}
          </div>
          {/* End Grid*/}
        </div>
      </div>
      {/* End Approach */}
      <ContactsComponent />
    </main>
  );
}
