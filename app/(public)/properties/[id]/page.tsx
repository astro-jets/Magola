import { getPropertyById } from "@/app/actions/properties";
import PurchaseComponent from "@/components/purchase/Purchase";
import { PropertyProps } from "@/types/Properties";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { BiSolidChevronRightCircle } from "react-icons/bi";

const SinglePropertyPage = async ({ params }: { params: Params }) => {
    const res = await getPropertyById(params.id);
    const property: PropertyProps = res.property;
    console.log(res)
    return (
        <div className="w-full flex items-center justify-center p-8">
            {property &&
                <div className="w-3/4">
                    < div className="min-h-[30rem]  pb-2 flex flex-col focus:outline-none">
                        {/* Action buttons */}
                        <div className=" max-h-90  h-90 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                            <img className="h-[98%] w-[98%] group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src={property.path}
                                alt="Blog Image" />
                        </div>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                {property.name}
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                {property.details}
                            </p>
                            <h3 className="relative  mt-3 inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                Categories
                            </h3>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {
                                    property.tags?.map((tag, index) => (
                                        <span key={index} className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                            {tag}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                        <PurchaseComponent property={property} />
                    </div>
                </div>
            }
        </div>
    );
}

export default SinglePropertyPage;