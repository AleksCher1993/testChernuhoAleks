import { useEffect, useState } from "react";
import s from "./userList.module.scss";
import { useInView } from "react-intersection-observer";
import { useGetUsersQuery } from "../../../app/api";
import { User } from "../../../entities/user";
export const UserList = () => {
  const [postStart, setPostStart] = useState(0);
  const { data = [] } = useGetUsersQuery({
    start: postStart,
  });


  const { ref: firstCard, inView: inViewFirstCard } = useInView({
    threshold: 0.5,
  });

  const { ref: lastCard, inView: inViewLastCard } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewFirstCard) {
      setPostStart((prev) => (prev > 0 ? prev - 1 : prev));
    }
  }, [inViewFirstCard]);

  useEffect(() => {
    if (inViewLastCard) {
      setPostStart((prev) => prev + 1);
    }
  }, [inViewLastCard]);

  return (
    <div className={s.container}>
      <ul>
        {data.map((user, index, arr) =>
          index === 0 ? (
            <li key={user.id} ref={firstCard} >
              <User {...user} />
            </li>
          ) : index === arr.length - 1 ? (
            <li key={user.id} ref={lastCard} >
              <User {...user} />
            </li>
          ) : (
            <li key={user.id} >
              <User {...user} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};
