import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import VideoSection from "./../components/VideoSection";
import FeaturesSection2 from "./../components/FeaturesSection2";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import CtaSection from "./../components/CtaSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="primary"
        size="large"
        bgImage="pincushion.jpg"
        bgImageOpacity={0.3}
        title="Seamless Alterations, No Strings Attached!"
        subtitle="An intuitive tool for tailors to manage and track alterations effortlessly, ensuring accuracy and efficiency for every project."
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/pricing"
      />
      <VideoSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Demo"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      />
      <FeaturesSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      />
      <ClientsSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
      <TestimonialsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/pricing"
      />
    </>
  );
}

export default IndexPage;
