"use server";

import { auth } from "ln/lib/auth";
import { prisma } from "ln/lib/prisma";

type User = {
  name: string | null;
  image: string | null;
};

export type Comment = {
  id: string;
  text: string;
  createdAt: Date;
  User: User | null;
};

export const getPostsComments = async (
  offset: number,
  limit: number,
  postId: string
): Promise<Comment[]> => {
  try {
    const comments = await prisma.postComment.findMany({
      skip: offset,
      take: limit,
      where: {
        postId,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        text: true,
        createdAt: true,
        User: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });

    return comments;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error occurred: ${error}`);
  }
};

export const getPostsCommentsCount = async (postId: string) => {
  try {
    const count = await prisma.postComment.count({
      where: {
        postId,
      },
    });

    return count;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error occurred: ${error}`);
  }
};

export const createPostsComments = async (text: string, postId: string) => {
  const session = await auth();
  try {
    const comments = await prisma.postComment.create({
      data: {
        text,
        userId: session?.user?.id,
        postId,
      },
    });

    return comments;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error occurred: ${error}`);
  }
};
