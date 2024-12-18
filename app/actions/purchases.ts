"use server";

export const newPurchase = async (
  propertyId: string,
  userId: string
): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/purchase/new`, {
      method: "POST",
      headers: { "Content-Type": "purchase/json" },
      cache: "no-store",
      body: JSON.stringify({ user: userId, property: propertyId }),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getPurchases = async (): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/purchase/all`, {
      next: { revalidate: 0 },
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getPurchaseByID = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/purchase/single/?id=${id}`,
      {
        next: { revalidate: 0 },
      }
    );
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getPurchaseByUser = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/purchase/user?user=${id}`,
      {
        next: { revalidate: 0 },
      }
    );
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};
