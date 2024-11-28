import { getPurchaseByUser } from "@/app/actions/purchases";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Services from "@/components/Properties/Properties";
import { getServerSession } from "next-auth";

const PurchasesPage = async () => {
    const session = await getServerSession(options);
    if (!session?.user) { return }
    const res = await getPurchaseByUser(session.user.id);
    const purchases = res.res;
    console.log(res.res)
    return (
        <Services title="Your Purchases" url="purchases" properties={purchases.properties} />
    );
}

export default PurchasesPage;