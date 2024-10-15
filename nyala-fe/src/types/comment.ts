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
