import { Carrousel } from "../components/Carrousel/Carrousel";
import { Navbar } from "@/app/components/Navbar/Navbar";
import home from "./home.module.sass";
import { Content } from "../components/Content/Content";
import { Banner } from "../components/Banner/Banner";
import { BannerTitle } from "../components/Banner/BannerTitle/BannerTitle";
import { ImageComponent } from "../components/ImageComponent/ImageComponent";
export default function Page() {
  return (
    <section className={home.container}>
      {/* <div className={home.overlay}></div> */}
      {/* <Navbar></Navbar> */}

      {/* <Carrousel
        urls={[
          "https://picsum.photos/id/781/900/500",
          "https://picsum.photos/id/240/900/500",
          "https://picsum.photos/id/539/900/500",
          "https://picsum.photos/id/358/900/500",
          "https://picsum.photos/id/620/900/500",
        ]}
      ></Carrousel> */}
      <Banner></Banner>
      <Content>
        <BannerTitle title="Emotes" subtitle="Get your emotes"></BannerTitle>
        <ImageComponent></ImageComponent>
        <ImageComponent></ImageComponent>
        <ImageComponent></ImageComponent>
        <ImageComponent></ImageComponent>
        <BannerTitle title="Badgets" subtitle="Get your badgets"></BannerTitle>
        <BannerTitle title="Pixel Art" subtitle="Get your emotes"></BannerTitle>
        <BannerTitle
          title="Profile picture"
          subtitle="Get your emotes"
        ></BannerTitle>
        <BannerTitle
          title="YCH Emotes"
          subtitle="Get your emotes"
        ></BannerTitle>
      </Content>
    </section>
  );
}
