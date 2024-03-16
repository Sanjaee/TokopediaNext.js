import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/Components/Layout";
import SliderTop from "@/Components/Slider";
import Asurans from "@/Components/Asurans";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="mt-[-82px] h-[1500px]">
        <Asurans />
        <SliderTop />
      </div>
    </Layout>
  );
}
