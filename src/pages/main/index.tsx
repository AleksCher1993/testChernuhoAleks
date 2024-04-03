import { UserInfo } from "../../widgets/userInfo";
import { UserList } from "../../widgets/userList";
import s from "./main.module.scss";
export const Main = () => {
  return (
    <main className={s.container}>
      <UserList />
      <UserInfo />
    </main>
  );
};
