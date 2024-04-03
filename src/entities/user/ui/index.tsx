import s from "./user.module.scss";
import avasmall from "./../../../app/assets/img/avasmall.png";
import { IUsers } from "../../../app/api";
import { useAppDispatch} from "../../../app/hook";
import { fetchUserById } from "../model/userSlice";

export const User = ({ id,name,email }:IUsers) => {
    const dispatch=useAppDispatch()
    const getUserInfo=(id:number)=>{
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
