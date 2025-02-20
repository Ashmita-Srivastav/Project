import Image from "next/image";
import SolutionsPage from "./Solutions/pages";

export default function Home() {
  console.log("What am I doing here? --- Server/Client?");
  return (
    <>
      <SolutionsPage/>
    </>
  );
}
