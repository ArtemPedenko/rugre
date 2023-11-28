import { getLatestPosts } from "@/lib/api";
import Logger from "./Logger";
import Header from "./components/Header";

export default async function Home() {
  return (
    <div>
      {/* <Logger data={data} /> */}
      <Header />
      <div>HОВОСТИ</div>
    </div>
  );
}
