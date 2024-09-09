import Navbar from "./components/Navbar/Navbar";
import MarqueeComponent from "./components/Marquee/MarqueeComponent";
import PageContent from "./components/PageContent/PageContent";

export default function Home() {
  return (
    <div className="flex flex-col items-center lg:px-10">
      <Navbar />
      <PageContent />
      <MarqueeComponent />
    </div>
  );
}
