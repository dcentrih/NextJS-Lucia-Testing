import { Session, User } from "lucia-auth";
import { useEffect, useState } from "react";

let hasSession = false;

export const useAuthSession = () => {
  const [authSession, setAuthSession] = useState<
    | {
        user: null;
        session: null;
      }
    | {
        user: User;
        session: Session;
      }
    | null
  >(null);

  useEffect(() => {
    const fetchSession = async () => {
      if (hasSession) return;

      const res = await fetch("/api/session");
      const data = await res.json();
      setAuthSession(data);
    };

    fetchSession();

    return () => {
      hasSession = true;
    };
  });

  return authSession;
};
