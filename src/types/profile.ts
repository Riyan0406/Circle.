export interface IProfile {
  id: number;
  userId: number;
  avatar: string;
  cover: string | null;
  bio: string | null;
  user: {
    username: string;
    fullname: string;
    email: string;
    thread: IThread[];
    _count: {
      follower: number;
      following: number;
      like: number;
    };
  };
}

interface IThread {
  id: number;
  conten: string;
  createdAt: string;
  image: IImage[];
  _count: {
    replies: number;
  };
  author: {
    id: number;
    username: string;
    fullname: string;
    profile: {
      avatar: string;
      cover: string | null;
    };
  };
}

interface IImage {
  image: string;
}

interface IApiResponse {
  status: boolean;
  message: string;
  data: IProfile;
}

export interface UserProfileData {
  bio?: string;
  avatar?: File;
  cover?: File;
}
