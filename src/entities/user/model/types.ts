
export interface IUserInfo {
    user: IUsers;
  isLoading:string;
  isSave:boolean;
  }
  
  export type nameType={
    first:string,last:string,
  }
  
  
  export interface IUsers{
  id:number;
  name:nameType;
  age:number;
  email:string;
  
  }