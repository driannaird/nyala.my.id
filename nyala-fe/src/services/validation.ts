"use server";

import { auth } from "ln/lib/auth";
import { prisma } from "ln/lib/prisma";

export const isValidation = async (postId: string) => {
  const session = await auth();

  try {
    const validation = await prisma.postValidation.findFirst({
      where: {
        userId: session?.user?.id,
        postId,
      },
    });

    return validation;
  } catch (error) {
    console.error("Error toggling validation:", error);
    throw new Error("Could not toggle validation");
  }
};

export const getValidationCount = async (postId: string) => {
  try {
    const validationCounts = await prisma.postValidation.groupBy({
      where: {
        postId: postId,
      },
      by: ["validation"],
      _count: {
        validation: true,
      },
    });

    const validCount =
      validationCounts.find((v) => v.validation === true)?._count.validation ||
      0;
    const invalidCount =
      validationCounts.find((v) => v.validation === false)?._count.validation ||
      0;

    return { validCount, invalidCount };
  } catch (error) {
    console.error("Error fetching validation counts:", error);
    throw new Error("Could not fetch validation counts");
  }
};

export const toggleValidation = async (postId: string, validation: boolean) => {
  const session = await auth();

  try {
    const existingValidation = await prisma.postValidation.findFirst({
      where: {
        postId,
        userId: session?.user?.id,
      },
    });

    if (existingValidation) {
      return await prisma.postValidation.update({
        where: { id: existingValidation.id },
        data: { validation },
      });
    } else {
      return await prisma.postValidation.create({
        data: {
          postId,
          validation,
          userId: session?.user?.id,
        },
      });
    }
  } catch (error) {
    console.error("Error toggling validation:", error);
    throw new Error("Could not toggle validation");
  }
};
