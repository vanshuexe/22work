import Link from "next/link";
export default function NotFound() {
  return (
    <main
      className="container"
      style={{ padding: "100px 20px", textAlign: "center" }}
    >
      <h1>Page not found</h1>
      <p>The page you requested could not be found.</p>
      <Link href="/" className="btn-read">
        Return home
      </Link>
    </main>
  );
}
