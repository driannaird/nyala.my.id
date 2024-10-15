"use server";

import { prisma } from "ln/lib/prisma";

export const getLocations = async () => {
  try {
    const locations = await prisma.post.findMany({
      select: {
        id: true,
        lat: true,
        lng: true,
        postCategory: {
          select: {
            name: true,
          },
        },
      },
    });

    const formattedLocations = locations.map((location) => ({
      key: location.postCategory.name,
      id: location.id,
      location: { lat: location.lat, lng: location.lng },
    }));

    return formattedLocations;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw new Error("Could not fetch locations");
  }
};
