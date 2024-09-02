"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const TopHeader = () => {
  const pathName = usePathname();
  const navigate = useRouter();

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Services", path: "/service" },
    { title: "Blogs", path: "/blogs" },
  ];
  const handleNavigate = () => {
    navigate.push("/login");
  };
  return (
    <div cna>
      <div className="bg-slate-900  ">
        <ul className="flex flex-row   container mx-auto items-center text-white text-xl ">
          <div className="flex flex-row w-full ">
            {links.map((link) => (
              <Link href={link.path} key={link.path}>
                <li
                  className={`hover:bg-slate-600  duration-300 py-5 px-10 ${
                    pathName === link.path ? "bg-slate-700 " : ""
                  }`}
                >
                  {link.title}
                </li>
              </Link>
            ))}
          </div>
          <div className="flex flex-row justify-end w-full ">
            <Link onClick={handleNavigate} href={"/login"}>
              <li
                className={`hover:bg-slate-300  duration-300 py-5 px-10  bg-slate-100 text-slate-950 `}
              >
                Login
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default TopHeader;
