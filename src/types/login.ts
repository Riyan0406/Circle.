interface IFollower {
  followerId: number;
  followingId: number;
}

interface IUserProfile {
  username: string;
  fullname: string;
  email: string;
  follower: IFollower[];
  following: IFollower[];
  _count: {
    follower: number;
    following: number;
    like: number;
  };
  thread: IThread[];
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
      avatar: string | null;
      cover: string | null;
    };
  };
}

interface IImage {
  image: string;
}

export interface IUserData {
  id: number;
  userId: number;
  avatar: string | null;
  cover: string | null;
  bio: string | null;
  user: IUserProfile;
}

export interface IUserLogin {
  id: number;
  password: string;
  username: string;
}
export interface IAuth {
  id: number;
  fullname: string;
  username: string;
  email: string;
  profile: string;
  sampul: string;
}
