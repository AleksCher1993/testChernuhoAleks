import s from "./userInfo.module.scss";
import avabig from "./../../../app/assets/img/avabig.png"
import { userInfoSelector } from "../../../entities/user";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import React, { FC, FormEvent, useEffect, useState } from "react";
import { changeDisabled, fetchPutUserById } from "../../../entities/user/model/userSlice";
export const UserInfo:React.FC=()=>{
    const userInfo=useAppSelector(userInfoSelector)
    const user=userInfo.user;
    const isLoading=userInfo.isLoading
    const isSave=userInfo.isSave
    const dispatch=useAppDispatch()

    const [first,setFirst]=useState(user.name.first)
    const [last,setLast]=useState(user.name.last)
    const [email,setEmail]=useState(user.email)
    const [age,setAge]=useState(user.age)
const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
e.preventDefault()
let obj={
    id:user.id,name:{first,last},email,age
}
dispatch(changeDisabled(true))
dispatch(fetchPutUserById(obj))

}
useEffect(()=>{
    setFirst(user.name.first)
    setLast(user.name.last)
    setEmail(user.email)
    setAge(user.age)
},[user])

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
            <p className={s.identity}>№:<span>{user.id}</span></p>
            <form className={s.form} onSubmit={(e)=>submitHandler(e)}>
                    <input type="text"  placeholder="first name" value={first} onChange={(e)=>setFirst(e.target.value)}/>
                    <input type="text"  placeholder="last name" value={last} onChange={(e)=>setLast(e.target.value)}/>
                    <input type="email"  placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="number"  placeholder="age" value={age} onChange={(e)=>setAge(+e.target.value)}/>
                    <button disabled={isSave} type="submit">Сохранить</button>
            </form>
        </div>
    </div>
}