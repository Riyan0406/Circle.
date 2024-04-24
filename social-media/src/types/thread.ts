export interface IThreadImage {
  image?: string;
}

export interface IProfile {
  avatar?: string;
  cover?: string;
}

export interface IAuthor {
  id: number;
  fullname: string;
  username: string;
  profile: IProfile;
}

export interface IReply {
  id: number;
  userId: number;
  author: {
    username: string;
    fullname: string;
  };
  conten: string;
  image: IThreadImage[];
}

export interface IData {
  id: number;
  conten?: string;
  createdAt: string;
  userId: number;
  threadId: number | null;
  image: IThreadImage[];
  author: IAuthor;
  replies: IReply[];
  _count: {
    replies: number;
    like: number;
  };
}

export interface IResponse {
  data: IData[];
}
