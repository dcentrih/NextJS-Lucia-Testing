import { useRouter } from "next/router";
import { useAuthSession } from "src/hooks/use-session";

export default function Home() {
  const router = useRouter();
  const session = useAuthSession();

  return (
    <>
      <button
        onClick={async () => {
          try {
            await fetch("/api/logout", {
              method: "POST",
            });
            router.push("/auth/login"); // login page
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Sign out
      </button>
      <div>{JSON.stringify(session?.user)}</div>
    </>
  );
}
