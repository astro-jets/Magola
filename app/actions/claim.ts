"use server";

export const newClaim = async (
  message: string,
  propertyId: string,
  userId: string
): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/claims/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        user: userId,
        property: propertyId,
        message: message,
      }),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getClaims = async (): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/claims/all`, {
      next: { revalidate: 0 },
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getClaimByID = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/claims/single/?id=${id}`,
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

export const getClaimByUser = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/claims/user?user=${id}`,
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

export const updateClaim = async (id: string, status: string): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/claims/update`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        id,
        status,
      }),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};
