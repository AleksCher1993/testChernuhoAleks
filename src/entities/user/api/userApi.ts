import { IUsers } from "../../../app/api";

export const userAPI = {
    fetchById: (id: number) => {
      return fetch(`http://localhost:8000/users/${id}`).then((r) => r.json());
    },
    putUserById: (obj:IUsers) => {
      return fetch(`http://localhost:8000/users/${obj.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...obj})
      }).then(r=>r.json());
    },
  };
  