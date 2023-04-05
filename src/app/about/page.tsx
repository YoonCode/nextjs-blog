import { Metadata } from "next";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "About Me",
  description: "Sangjin 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          소통과 문제해결의 전문 개발자 <br />
          성장을 위한 끊임없는 도전과 학습 과정을 즐기는 개발자
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          삼백씨비티 (-Now) <br />
          투티 (-2023.03) <br />
          미션1 (-2021.12)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Typescript, Node <br />
          Git, Postman, Firebase <br />
          VS Code, MongoDB
        </p>
      </section>
    </>
  );
}
