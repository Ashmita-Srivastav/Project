import Image from "next/image";
import SolutionsPage from "./Solutions/pages";

export default function Home() {
  console.log("What am I doing here? --- Server/Client?");
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center  "> Welcome to next.js</h1>
      <SolutionsPage />
    </>
  );
}
