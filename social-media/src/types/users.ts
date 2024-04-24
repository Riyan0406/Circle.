interface IProfile {
  id: number;
  userId: number;
  avatar: string;
  cover: string;
  bio: string;
}

export interface IUser {
  id: number;
  username: string;
  fullname: string;
  email: string;
  password: string;
  profile: IProfile;
  follower: any[];
  following: any[];
}

export interface IApiResponse {
  status: boolean;
  data: {
    users: IUser[];
  };
}

export interface IFollower {
  id: number;
  username: string;
  fullname: string;
  profile: {
    avatar: string;
    bio: string;
  };
}
