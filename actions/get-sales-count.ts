import prismadb from "@/lib/prismadb";

export const getSalesCount = async (storeId: string) => {

    const salesCount = await prismadb.order.count({
        where: {
            isPaid: true,
            storeId: storeId
        },
    });

    return salesCount;
}

