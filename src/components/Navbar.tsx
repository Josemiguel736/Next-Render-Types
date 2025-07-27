import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-48 mx-auto">
      <ul>
        <li>
          <Link
            href="/ssr-landing"
            className=" mb-5 p-3 block w-full bg-slate-400 rounded-2xl hover:bg-slate-600"
          >
            SSR (Server Side Rendering)
          </Link>
        </li>
        <li>
          <Link
            href="/csr-passwords"
            className=" mb-5 p-3 block w-full bg-slate-400 rounded-2xl hover:bg-slate-600"
          >
            CSR (Client Server Rendering)
          </Link>
        </li>
        <li>
          <Link
            href="/dr-dynamic"
            className=" mb-5 p-3 block w-full bg-slate-400 rounded-2xl hover:bg-slate-600"
          >
            DR (Dinamic Rendering)
          </Link>
        </li>
      </ul>
    </nav>
  );
};
