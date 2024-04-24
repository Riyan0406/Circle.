interface IImage {
  image: string;
}

interface IProfile {
  avatar: string;
  cover: string | null;
}

interface ICount {
  like: number;
  reply: number;
}

interface IAuthor {
  id: number;
  username: string;
  fullname: string;
  profile: IProfile;
}

export interface IThreadData {
  id: number;
  conten: string;
  userId: number;
  threadId: number | null;
  createdAt: string;
  updatedAt: string;
  image: IImage[];
  author: IAuthor;
  _count: ICount;
}
