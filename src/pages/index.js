import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import VideoSection from "./../components/VideoSection";
import FeaturesSection from "./../components/FeaturesSection";
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
        title="Your title here"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
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
      <NewsletterSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
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
