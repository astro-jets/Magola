"use server";

export const newLease = async (
  propertyId: string,
  userId: string
): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/lease/new`, {
      method: "POST",
      headers: { "Content-Type": "lease/json" },
      cache: "no-store",
      body: JSON.stringify({ user: userId, property: propertyId }),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getLeases = async (): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/lease/all`, {
      next: { revalidate: 0 },
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getLeaseByID = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/lease/single/?id=${id}`,
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

export const getLeaseByUser = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/lease/user?user=${id}`,
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
