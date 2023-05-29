import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Login() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (response.redirected) window.location.href = response.url;
  };
  return (
    <div>
      <h1>Sign in</h1>
      <form method="post" onSubmit={handleSubmit} action="/api/login">
        <label htmlFor="username">username</label>
        <br />
        <input id="username" name="username" />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" id="password" name="password" />
        <br />
        <input type="submit" value="Continue" className="button" />
      </form>
      <Link href="/auth/register" className="link">
        Create a new account
      </Link>
    </div>
  );
}
