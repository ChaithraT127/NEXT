import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>

      <Link
        href="/"
        className="px-4 py-2 bg-[#ff8c00] text-white rounded hover:bg-[#cc5500]"
      >
        Go back Home
      </Link>
    </div>
  );
}