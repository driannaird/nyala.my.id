import axios from "axios";
import FormData from "form-data";
import { auth } from "ln/lib/auth";
import { prisma } from "ln/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Silahkan Login Terlebih Dahulu" },
        { status: 401 }
      );
    }

    const { lat, lng, description, images } = await req.json();

    const formData = new FormData();

    images.forEach((base64Image: string, index: number) => {
      const match = base64Image.match(/^data:image\/(jpeg|png|jpg);base64,/);
      if (!match) {
        throw new Error(
          "Format gambar tidak didukung. Hanya jpg, jpeg, atau png."
        );
      }

      const extension = match[1];
      const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");

      formData.append("images", buffer, `image_${index}.${extension}`);
    });

    const uploadImages = await axios.post(
      "http://localhost:8000/media/upload",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          "x-user": process.env.ADMIN_USER,
          "x-key": process.env.ADMIN_KEY,
        },
        maxBodyLength: Infinity,
      }
    );

    const res = await prisma.post.create({
      data: {
        description,
        lat,
        lng,
        location: "-",
        postCategoryId: "cm28dr7fh00007nzgnfp45291",
        postMedia: {
          createMany: {
            data: uploadImages.data.files,
          },
        },
        userId: session.user.id!,
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
          },
        },
        postCategory: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error(error); // Log error untuk debugging
    return NextResponse.json({ error }, { status: 400 });
  }
}
