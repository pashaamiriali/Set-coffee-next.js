import mongoose, { Document } from "mongoose";


interface ArticleFooterProps {
    title: string;
    img: string;
    comments: string;
    date: string;
    href: string;
   
  }

  interface LoginProps {
    showRegisterForm: () => void;
  }

  interface RegisterProps {
    showLoginForm: () => void;
  }
  interface BodyRequest {
    name:string;
    username: string;
    email:string;
    password: string;
    refreshToken:string
    

  }

  interface IUser {
    username: string;
    email: string;

  }
  
  interface IComment extends Document {
    username: string;
    body: string;
    email: string;
    score: number;
    date: Date;
    product: mongoose.Types.ObjectId;
  }

  interface IProduct extends Document {
    _id:String;
    name: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    weight: number;
    suitableFor: string;
    smell: string;
    score: number;
    tags: string[];
    comments: mongoose.Types.ObjectId[]; 
  }


  
  interface Params {
    id: string;
  }
  

  interface CommentType {
    _id: string;
    username: string;
    body: string;
    score: number;
    email: string;
    date:Date

  }
  
  interface SingleComment {
    username: string;
    body: string;
    email: string;
    score: number;
    date:Date
  }
  interface CartProps {
    name: string;
    price: number;
    score: number;
  }

  interface WishListRequestBody {
    user: string; 
    product: string; 
  }
  



   interface Wish {
    _id: String
    product: {
      name: string;
      price: number;
      score: number;
    };
  }
  

  interface UserType {
    _id: string;
    name: string; // یا هر فیلد دیگری که نیاز دارید
    [key: string]: any; // برای انعطاف‌پذیری بیشتر
  }
  

  
  

  type NavbarProps = {
    isLogin: (Document<unknown, {}, IUser> & IUser & Required<{ _id: unknown; }> & { __v: number; }) | null;
  };
  
export type { UserType,Wish,WishListRequestBody,CartProps,SingleComment,CommentType,Params,IProduct,IComment,ArticleFooterProps,LoginProps,RegisterProps,BodyRequest,NavbarProps}  