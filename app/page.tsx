import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <h1>Real Estate</h1>

        <Link href="/houses">
          <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            link
          </button>
        </Link>
      </div>
    </div>
  );
}
