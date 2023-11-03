import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product/4/review/6");
  };
  return (
    <main>
      <div>
        <Link href="/blog">Blog</Link>
        <br />
        <Link href="/product">Product</Link>
        <br />
        <Link href="/docs">Docs</Link>
        <br />
        <button onClick={handleClick}>
          Click Me to Go To the Product 4 Review 6 Route
        </button>{" "}
        <Link href="/photos">Photos</Link>
        <br />
        <Link href="/posts">Posts</Link>
        <br />
        <Link href="/comments">Photos</Link>
        <br />
        {/* Navigating Programmatically  */}
      </div>
    </main>
  );
}
