
import { getPropertyById } from "@/app/actions/properties";
import ExtraEditForm from "@/components/Extraedit";
import { PropertyProps } from "@/types/Properties";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


const SinglePropertyPage = async ({ params }: { params: Params }) => {
    const res = await getPropertyById(params.id);
    const property: PropertyProps = res.property;
    return (
        <>
            <ExtraEditForm property={property} />
        </>
    );
};

export default SinglePropertyPage;
