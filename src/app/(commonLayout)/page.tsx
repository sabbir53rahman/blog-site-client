import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  console.log(cookieStore);

  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  const session = await res.json();

  console.log(session);
  return <div className="">Home page</div>;
}
