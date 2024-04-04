import s from "./user.module.scss";
import avasmall from "./../../../app/assets/img/avasmall.png";
import { useAppDispatch} from "../../../app/hook";
import { changeDisabled, fetchUserById } from "../model/userSlice";
import { IUsers } from "../model/types";
import React from "react";

export const User:React.FC<IUsers> = ({ id,name,email }) => {
    const dispatch=useAppDispatch()
    const getUserInfo=(id:number)=>{
      dispatch(changeDisabled(false))
        dispatch(fetchUserById(id))
      }
  return (
    <div className={s.user} onClick={()=>getUserInfo(id)}>
      <div className={s.ava}>
        <img src={avasmall} alt="avasmall" />
      </div>
      <div className={s.name}>
        <p>
          {name.first} {name.last}
        </p>
        <p className={s.email}>{email}</p>
      </div>
      <p>{id}</p>
    </div>
  );
};
