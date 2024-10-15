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
