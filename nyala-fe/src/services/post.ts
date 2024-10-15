"use server";

import { prisma } from "ln/lib/prisma";

type PostMedia = {
  name: string;
  alt: string;
  url: string;
};

type User = {
  name: string | null;
  image: string | null;
};

type PostCategory = {
  name: string;
};

export type Post = {
  id: string;
  createdAt: Date;
  description: string;
  location: string;
  lat: number;
  lng: number;
  postMedia: PostMedia[];
  User: User;
  postCategory: PostCategory;
};

export const getPosts = async (
  offset: number,
  limit: number
): Promise<Post[]> => {
  try {
    const users = await prisma.post.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        createdAt: true,
        description: true,
        location: true,
        lat: true,
        lng: true,
        postMedia: {
          select: {
            name: true,
            alt: true,
            url: true,
          },
        },
        User: {
          select: {
            name: true,
            image: true,
          },
        },
        postCategory: {
          select: {
            name: true,
          },
        },
      },
    });

    return users;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error occurred: ${error}`);
  }
};

export const getPostById = async (id: string): Promise<Post | null> => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        createdAt: true,
        description: true,
        location: true,
        lat: true,
        lng: true,
        postMedia: {
          select: {
            name: true,
            alt: true,
            url: true,
          },
        },
        User: {
          select: {
            name: true,
            image: true,
          },
        },
        postCategory: {
          select: {
            name: true,
          },
        },
      },
    });

    return post ?? null;
  } catch (error) {
    console.log(error);
    throw new Error(`An error occurred: ${error}`);
  }
};
