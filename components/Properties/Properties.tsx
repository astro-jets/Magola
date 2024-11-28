import { getProperties } from "@/app/actions/properties";
import { PropertyProps } from "@/types/Properties";
import SingleProperty from "./SingleProperty";

const Properties = async ({ properties, title, url }: { title: string; url: string; properties: PropertyProps[] }) => {
    return (
        <>

            {/* Properties */}
            <div className="max-w-7xl px-4 lg:px-6 py-12 mx-auto">
                <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
                    <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
                        {title}
                    </h1>
                </div>

                {/* Card Grid */}
                <div className=" grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                    {
                        properties?.map((property, index) => (
                            <SingleProperty url={url} key={index} property={property} />
                        ))
                    }
                </div>


                <div className="mt-10 lg:mt-20 text-center">
                    <a className="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="#">
                        View all listings
                    </a>
                </div>
            </div>

        </>
    );
}

export default Properties;