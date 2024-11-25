"use server";

export const getProperties = async (): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/property/all/`, {
      next: {
        revalidate: 0,
      },
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};
export const getPropertyById = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/property/single/?id=${id}`,
      {
        next: {
          revalidate: 0,
        },
      }
    );
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getPropertiesByUser = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/property/byUser/?id=${id}`
    );
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};
