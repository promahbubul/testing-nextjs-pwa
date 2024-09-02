import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="flex h-full flex-col  p-24">
      <div className="my-10 text-xl flex flex-row ">
        <Link
          href={"/about/history"}
          className="underline hover:bg-slate-300 py-5 px-8"
        >
          History
        </Link>
        <Link
          href={"/about/history"}
          className="underline hover:bg-slate-300 py-5 px-8"
        >
          Misstion
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-slate-900 text-center underline">
        Welcome to About Page
      </h1>
    </main>
  );
};
export default AboutPage;
