"use server";

export const newPurchase = async (
  userId: string,
  propertyId: string
): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/purchase/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({ user: userId, property: propertyId }),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getApplications = async (): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/applications/all`,
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

export const getApplicationByID = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/application/single/?application=${id}`,
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

export const getApplicationByUser = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/applications/user?user=${id}`,
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
