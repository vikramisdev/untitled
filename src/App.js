import "./App.css";
import BlogPostCard from "./BlogPostCard";
import ButtonCard from "./ButtonCArd";
import Card from "./Card";
import FaqButton from "./FaqButton";
import FooterLinks from "./FooterLinks";

function App() {
  return (
    <div className="w-full">
      <header className="flex md:pl-20 md:pr-20 pt-5 pb-5 items-center">
        <div className="flex h-8 pl-8 pr-8 justify-between w-full items-center">
          <nav className="flex">
            <div className="flex items-center gap-2 mr-10">
              <img
                className="h-8 w-8"
                src="/images/Logomark.png"
                alt="logo"
              ></img>
              <img className="h-4" src="/images/Vector.svg" alt="logo"></img>
            </div>

            <ul className="md:flex items-center gap-8 hidden md:visible">
              <li className="cursor-pointer font-semibold">Home</li>
              <details>
                <summary className="cursor-pointer font-semibold">
                  Products
                </summary>
              </details>
              <details>
                <summary className="cursor-pointer font-semibold">
                  Resources
                </summary>
              </details>
              <li className="cursor-pointer font-semibold">Pricing</li>
            </ul>
          </nav>

          <img
            className="h-8 w-8 rounded-full cursor-pointer hidden md:block"
            src="/images/avatar.png"
            alt="logo"
          ></img>

          <i className="bi bi-list md:hidden"></i>
        </div>
      </header>

      <hr className="w-full"></hr>

      <div className="w-full m-auto mt-24">

        <div className="flex md:w-full justify-center">
          <div className="flex justify-center items-center gap-2 pl-2 pr-2 pt-1 pb-1 w-fit bg-primary bg-opacity-35 border-purple-300 border rounded-full text-sm font-medium">
            <h2 className="bg-white pl-3 pr-3 pt-1 pb-1 border rounded-full text-sm font-medium text-purple-800">
              New feature
            </h2>
            <h2 className="text-purple-800">Check out the team dashboard</h2>
            <i class="bi bi-arrow-right text-purple-800"></i>
          </div>
        </div>

        <h2 className="text-center text-6xl font-semibold custom-letter-spacing m-4">
          Beautiful analytics to grow smarter
        </h2>
        <p className="font-normal text-xl text-center m-2 text-gray-700">
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
          <br /> and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="md:flex gap-3 justify-center m-5">
        <button className="flex h-16 w-full md:w-36 rounded-lg border border-gray-300 items-center justify-center gap-2 font-semibold">
          <i className="bi bi-play-circle"></i>Demo
        </button>
        <button className="h-16 w-full md:w-36 mt-5 md:mt-0 rounded-lg bg-purple-700 text-white font-semibold">
          Sign Up
        </button>
      </div>
      <div className="md:ml-28 md:mr-28 ml-5 mr-5 mt-20 rounded-2xl border-8 border-black">
        <img
          className="w-fit hidden md:block rounded-2xl"
          src="/images/screen.svg"
          alt="screen"
        ></img>
        <img
          className="w-full md:hidden rounded-2xl"
          src="/images/screen-mobile.svg"
          alt="screen"
        ></img>
      </div>
      <hr className="text-center ml-28 mr-28"></hr>

      <div className="md:ml-28 md:mr-28 md:mt-24 ml-10 mr-10 mt-20">
        <h3 className="text-center font-medium text-base">
          Join 4,000+ companies already growing
        </h3>
        <div className="md:justify-center gap-8 mt-8 grid grid-cols-2 md:flex">
          <img src="/images/company_logo.svg" alt="company logo"></img>
          <img src="/images/company_logo1.svg" alt="company logo"></img>
          <img src="/images/company_logo2.svg" alt="company logo"></img>
          <img src="/images/company_logo3.svg" alt="company logo"></img>
          <img src="/images/company_logo4.svg" alt="company logo"></img>
          <img src="/images/company_logo5.svg" alt="company logo"></img>
        </div>
      </div>

      <div className="text-center md:ml-28 md:mr-28 md:mt-40 md:mb-20 mx-5 mt-24">
        <h2 className="font-medium text-base text-purple-800 m-4">Features</h2>
        <h1 className="font-semibold text-4xl mb-7 custom-letter-spacing">
          Analytics that feels like it’s from the future
        </h1>
        <p className="font-normal text-2xl">
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
          <br /> and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="grid justify-center md:grid-cols-3 md:md:ml-48 md:md:mr-48 mt-28 gap-20 mx-5">
        <Card
          imgSrc="/images/message-chat.svg"
          title="Share team inboxes"
          content="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <Card
          imgSrc="/images/zap.svg"
          title="Share team inboxes"
          content="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <Card
          imgSrc="/images/chart-breakout.svg"
          title="Share team inboxes"
          content="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <Card
          imgSrc="/images/message-smile.svg"
          title="Share team inboxes"
          content="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <Card
          imgSrc="/images/command.svg"
          title="Share team inboxes"
          content="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <Card
          imgSrc="/images/message-heart.svg"
          title="Share team inboxes"
          content="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
      </div>

      <div className="md:mt-32 md:pt-28 md:pb-28 mt-12 pt-14 pb-14 pl-5 pr-5 candice-wu">
        <div className="w-full flex justify-center mb-10">
          <img
            className=""
            src="/images/sisyphus.svg"
            alt="sisyphus logo"
          ></img>
        </div>
        <h2 className="font-semibold md:text-6xl text-4xl text-center custom-letter-spacing">
          We’ve been using Untitled to kick start every new
          <br /> project and can’t imagine working without it.
        </h2>
        <div className="w-full flex justify-center mb-5 mt-10">
          <img
            className="h-16"
            src="/images/candice-wu.svg"
            alt="candice wu"
          ></img>
        </div>
        <h2 className="text-center font-bold text-xl">Candice Wu</h2>
        <h2 className="text-center">Product Manager, Sisyphus</h2>
      </div>

      <div className="text-center md:ml-48 md:mr-48 md:mt-32 mt-14 mb-14 ml-5 mr-5">
        <h2 className="m-auto mb-5 w-fit font-semibold text-base px-3 py-1 border border-purple-700 rounded-full text-purple-600 border-opacity-40 bg-purple-200 bg-opacity-40">
          Features
        </h2>
        <h className="font-semibold text-4xl md:text-5xl">
          Cutting-edge features for advanced analytics
        </h>
        <p className="md:m-7 mt-4 font-normal text-xl custom-text-gray">
          Powerful, self-serve product and growth analytics to help you convert,
          engage,
          <br /> and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <img
        className="w-full hidden md:block"
        src="/images/content.svg"
        alt="content"
      ></img>
      <img
        className="md:hidden mx-16"
        src="/images/content-mobile.svg"
        alt="content"
      ></img>

      <div className="grid md:grid-cols-3 gap-10 md:gap-28 md:md:ml-48 md:md:mr-48 mb-12 md:mb-28 mt-12 mx-5">
        <ButtonCard
          imgSrc="/images/message-chat.svg"
          title="Share team inboxes"
          content="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <ButtonCard
          imgSrc="/images/zap.svg"
          title="Deliver instant answers"
          content="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        />
        <ButtonCard
          imgSrc="/images/chart-breakout.svg"
          title="Manage your team with reports"
          content="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
        />
      </div>

      <div className="text-center mb-16">
        <h1 className="font-semibold custom-letter-spacing text-4xl">
          Frequently asked questions
        </h1>
        <h2 className="font-normal text-xl mt-5">
          Everything you need to know about the product and billing.
        </h2>
      </div>

      <div className="md:ml-48 md:mr-48 mx-5 mt-5 flex justify-center font-semibold text-lg">
        <div>
          <FaqButton
            summary="Is there a free trial available?"
            content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />

          <FaqButton summary="Can I change my plan later?" content="" />

          <FaqButton summary="What is your cancellation policy?" content="" />

          <FaqButton
            summary="Can other info be added to an invoice?"
            content=""
          />

          <FaqButton summary="How does billing work?" content="" />

          <FaqButton summary="How do I change my account email?" content="" />
        </div>
      </div>

      <div className="md:ml-48 md:mr-48 md:mt-28 md:mb-28 mt-12 mb-12 text-center">
        <div className="p-10 bg bg-avatar-group rounded-2xl w-full">
          <div className="flex justify-center">
            <img
              className=""
              src="/images/avatar-group.svg"
              alt="avatar group"
            ></img>
          </div>
          <h1 className="m-5 font-semibold text-xl">Still have questions?</h1>
          <h1 className="m-5 font-normal text-xl">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </h1>
          <button className="px-5 py-3 bg-purple-600 text-white rounded-lg mt-2">
            Get in touch
          </button>
        </div>
      </div>

      <div className="flex justify-between md:ml-48 md:mr-48 md:mb-28 m-5">
        <div>
          <h1 className="text-purple-600 font-semibold text-base">Our blog</h1>
          <h1 className="mt-2 text-4xl font-semibold">Lastest blog posts</h1>
          <h1 className="mt-5 font-normal text-xl">
            Tool and strategies modern teams need to help their companies grow.
          </h1>
        </div>

        <button className="hidden md:visible px-5 py-3 bg-purple-600 text-white rounded-lg mt-2 h-12">
          View all posts
        </button>
      </div>

      <div className="grid md:grid-cols-3 md:ml-48 md:mr-48 md:mb-28 mb-10 md:gap-x-10 md:gap-y-12">
        <BlogPostCard
          imgSrc="/images/post1.svg"
          avatar="/images/avatar1.svg"
          category="Design"
          title="UX review presentations"
          description="How do you create compelling presentations that wow your colleagues and impress your managers?"
        />
        <BlogPostCard
          imgSrc="/images/post2.svg"
          avatar="/images/avatar2.svg"
          category="Product"
          title="Migrating to Linear 101"
          description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
        />
        <BlogPostCard
          imgSrc="/images/post3.svg"
          avatar="/images/avatar3.svg"
          category="Software Engineering"
          title="Building your API stack"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
        />

        <button className="md:hidden px-5 py-3 bg-purple-600 text-white rounded-lg m-5 h-12">
          View all posts
        </button>
      </div>

      <div className="text-center md:mt-28 mb-28 bg-avatar-group pt-28 pb-20">
        <h1 className="font-semibold text-4xl custom-letter-spacing">
          Start your free trial
        </h1>
        <h1 className="font-semibold md:text-xl custom-text-gray mt-5 mx-10">
          Join over 4,000+ startups already growing with Untitled.
        </h1>

        <div className="md:flex md:gap-3 md:justify-center md:m-12 mx-5 mt-10">
          <button className="flex h-16 md:w-36 w-full rounded-lg border border-gray-300 items-center justify-center gap-2 font-semibold">
            Learn more
          </button>
          <button className="h-16 md:w-36 w-full mt-5 md:mt-0 rounded-lg bg-purple-700 text-white font-semibold">
            Get started
          </button>
        </div>
      </div>

      <div className="md:ml-48 md:mr-28 md:mt-28 md:mb-28 mx-5 md:mx-0">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12">
          <FooterLinks
            title="Product"
            links={[
              "Overview",
              "Features",
              "Solutions",
              "tutorial",
              "pricing",
              "Releases",
            ]}
          />

          <FooterLinks
            title="Company"
            links={[
              "About Us",
              "Careers",
              "Press",
              "News",
              "Media Kit",
              "Contact",
            ]}
          />

          <FooterLinks
            title="Resources"
            links={[
              "Blog",
              "Newsletter",
              "Events",
              "Help centre",
              "Tutorials",
              "Support",
            ]}
          />

          <FooterLinks
            title="Use cases"
            links={[
              "Startups",
              "Enterprice",
              "Goverment",
              "SaaS centre",
              "Marketplaces",
              "Ecommerce",
            ]}
          />

          <FooterLinks
            title="Social"
            links={[
              "Twitter",
              "LinkedIn",
              "facebook",
              "GitHub",
              "AngelList",
              "Dribbble",
            ]}
          />

          <FooterLinks
            title="Legal"
            links={[
              "Terms",
              "Privacy",
              "Cookies",
              "Licences",
              "Settings",
              "Contact",
            ]}
          />
        </div>
      </div>

      <hr className="text-center md:ml-48 md:mr-48 mt-5"></hr>

      <div className="md:ml-48 md:mr-48 md:flex md:justify-between py-12 mx-5">
        <div className="flex items-center gap-2 mr-10">
          <img className="h-8 w-8" src="/images/Logomark.png" alt="logo"></img>
          <img className="h-4" src="/images/Vector.svg" alt="logo"></img>
        </div>

        <h1 className="font-semibold opacity-80 mt-5 md:mt-0">
          © 2077 Untitled UI. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default App;
