interface IImage {
  image: string;
}

interface IAuthorProfile {
  avatar: string | null;
  cover: string | null;
}

interface IAuthor {
  id: number;
  username: string;
  fullname: string;
  profile: IAuthorProfile;
}

interface IThreadCount {
  replies: number;
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
  _count: {
    replies: number;
    like: number;
  };
  isMainThread: boolean;
}

interface IApiResponse {
  status: boolean;
  message: string;
  data: IThreadData[];
}
