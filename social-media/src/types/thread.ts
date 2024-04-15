export interface IUser {
  id: number;
  fullname: string;
  username: string;
  email: string;
  profile: string;
  sampul: string;
}

export interface IUserComment {
  id: number;
  fullname: string;
  username: string;
  email: string;
  profile: string;
  sampul: string;
}

export interface IThread {
  id: number;
  user: IUser;
  post: IUserComment;
  comment: IComment[];
  image: string;
  conten: string;
  postAt: string;
  totalLikes: number;
  totalComments: number;
}
export interface IComment {
  comment_id: number;
  comment_text: string;
  image: string;
  comment_date: string;
  user: {
    fullname: string;
    username: string;
    email: string;
    profile: string;
    sampul: string;
  };
}
