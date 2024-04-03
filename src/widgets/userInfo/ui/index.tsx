import s from "./userInfo.module.scss";
import avabig from "./../../../app/assets/img/avabig.png"
import { userInfoSelector } from "../../../entities/user";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { FormEvent, useEffect, useState } from "react";
import { fetchPutUserById } from "../../../entities/user/model/userSlice";
export const UserInfo=()=>{
    const userInfo=useAppSelector(userInfoSelector).user;
    const isLoading=useAppSelector(userInfoSelector).isLoading
    const dispatch=useAppDispatch()

    const [first,setFirst]=useState(userInfo.name.first)
    const [last,setLast]=useState(userInfo.name.last)
    const [email,setEmail]=useState(userInfo.email)
    const [age,setAge]=useState(userInfo.age)
const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
e.preventDefault()
let obj={
    id:userInfo.id,name:{first,last},email,age
}

dispatch(fetchPutUserById(obj))

}
useEffect(()=>{
    setFirst(userInfo.name.first)
    setLast(userInfo.name.last)
    setEmail(userInfo.email)
    setAge(userInfo.age)
},[userInfo])

if (isLoading==="pending") {
    return <div className={s.container}>
      Выберите юзера
    </div>
  }

    return <div className={s.container}>
        <div className={s.ava}>
            <img src={avabig} alt="avabig" />
        </div>
        <div>
            <p className={s.identity}>№:<span>{userInfo.id}</span></p>
            <form className={s.form} onSubmit={(e)=>submitHandler(e)}>
                    <input type="text"  placeholder="first name" value={first} onChange={(e)=>setFirst(e.target.value)}/>
                    <input type="text"  placeholder="last name" value={last} onChange={(e)=>setLast(e.target.value)}/>
                    <input type="email"  placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="number"  placeholder="age" value={age} onChange={(e)=>setAge(+e.target.value)}/>
                    <button type="submit">Сохранить</button>
            </form>
        </div>
    </div>
}