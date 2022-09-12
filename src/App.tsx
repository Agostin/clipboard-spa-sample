import Paragraph from "./components/Paragraph";

import logo from "./assets/logo.svg";
import imageComputer from "./assets/image-computer.png";
import imageDevices from "./assets/image-devices.png";
import iconBlacklist from "./assets/icon-blacklist.svg";
import iconPreview from "./assets/icon-preview.svg";
import iconText from "./assets/icon-text.svg";
import logoGoogle from "./assets/logo-google.png";
import logoIbm from "./assets/logo-ibm.png";
import logoMicrosoft from "./assets/logo-microsoft.png";
import logoHp from "./assets/logo-hp.png";
import logoVectorGraphics from "./assets/logo-vector-graphics.png";
import iconFb from "./assets/icon-facebook.svg";
import iconTwitter from "./assets/icon-twitter.svg";
import iconInstagram from "./assets/icon-instagram.svg";

const App = () => {
  const topFeatures = [
    {
      title: "Quick Search",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veniam sit cum molestias.",
    },
    {
      title: "iCloud Sync",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veniam sit cum molestias.",
    },
    {
      title: "Complete History",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veniam sit cum molestias.",
    },
  ];
  const gridFeatures = [
    {
      icon: iconBlacklist,
      title: "Create blacklist",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus architecto voluptatem mollitia saepe necessitatibus maiores.",
    },
    {
      icon: iconPreview,
      title: "Plain text snippets",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus architecto voluptatem mollitia saepe necessitatibus maiores.",
    },
    {
      icon: iconText,
      title: "Sneak preview",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus architecto voluptatem mollitia saepe necessitatibus maiores.",
    },
  ];
  const testimonials = [
    {
      id: "google",
      icon: logoGoogle,
    },
    {
      id: "ibm",
      icon: logoIbm,
    },
    {
      id: "microsoft",
      icon: logoMicrosoft,
    },
    {
      id: "hp",
      icon: logoHp,
    },
    {
      id: "vc",
      icon: logoVectorGraphics,
    },
  ];

  return (
    <div className="bg-no-repeat bg-contain bg-top bg-hero justify-center items-center h-100 bg-white">
      {/* Top Hero section */}
      <section className="section-container">
        <img src={logo} className="mx-auto my-4" alt="Clipboard logo" />
        <h1 className="text-black font-sans font-bold text-4xl text-center">
          A history of everything you copy
        </h1>
        <h2 className="text-slate-300 font-sans text-center">
          Clipboard allows you to track and organize everything you copy.
          <br />
          Instantly access your clipboard on all your devices.
        </h2>
        <div className="buttons-container">
          <button className="px-8 py-2 rounded-full bg-primary shadow-lg font-sans text-white duration-150 hover:opacity-80">
            Download for iOS
          </button>
          <button className="px-8 py-2 rounded-full bg-secondary shadow-lg font-sans text-white duration-150 hover:opacity-80">
            Download for Mac
          </button>
        </div>
      </section>
      {/* Features section */}
      <section className="section-container space-y-12">
        <Paragraph
          title="Keep track of your snippets"
          content="Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices. Our Mac and iOS
            apps will help you organize everything."
        />
        <div className="relative flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img
              className="mx-auto w-full max-w-sm md:-left-24 md:absolute md:top-0 md:bottom-0 md:max-w-lg"
              src={imageComputer}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2 md:pl-8">
            {topFeatures.map((item) => (
              <>
                <h3 className="font-sans font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm font-sans mb-8">
                  {item.description}
                </p>
              </>
            ))}
          </div>
        </div>
      </section>
      {/* Features section 2 */}
      <section className="section-container space-y-12">
        <Paragraph
          title="Access Clipboard anywhere"
          content="Whether you're on the go, or at your computer, you can access to all your Clipboard snippets in few simple clicks."
        />
        <img className="sm:max-w-lg w-full mx-auto" src={imageDevices} alt="" />
      </section>
      {/* Grid features section */}
      <section className="section-container space-y-12">
        <Paragraph
          title="Supercharge your workflow"
          content="We've got the tools to boost your productivity."
        />
        <div className="flex flex-col md:flex-row mx-auto md:space-x-8 space-y-8 md:space-y-0 p-8">
          {gridFeatures.map((item) => (
            <div className="flex flex-col space-y-4 items-center justify-center">
              <img src={item.icon} alt="" className="m-y-4 h-8" />
              <h4 className="font-sans font-bold text-lg">{item.title}</h4>
              <p className="text-slate-400 text-center sm:text-left font-sm font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials section */}
      <section className="flex flex-col md:flex-row justify-center items-center py-8 space-y-16 md:space-y-0 lg:space-x-12">
        {testimonials.map((item) => (
          <img id={item.id} src={item.icon} className="h-full" alt="" />
        ))}
      </section>
      <section className="section-container my-12">
        <Paragraph
          title="Clipboard for iOS and Mac OS"
          content="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
        />
        <div className="buttons-container">
          <button className="px-8 py-2 rounded-full bg-primary shadow-md shadow-primary font-sans text-white">
            Download for iOS
          </button>
          <button className="px-8 py-2 rounded-full bg-secondary shadow-md shadow-secondary font-sans text-white">
            Download for Mac
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="flex flex-col space-y-8 justify-around md:flex-row md:space-y-0 md:space-x-8 p-8 w-full bg-slate-100">
        <img src={logo} className="h-12 w-12 mx-auto md:mx-0" alt="" />
        <div className="flex flex-col md:justify-between items-center md:flex-row md:space-x-16 md:items-start">
          <div className="flex flex-col text-center md:text-start">
            <a
              href="#"
              className="text-slate-400 hover:text-primary duration-150 font-extralight font-sans mb-2"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-primary duration-150 font-extralight font-sans mb-2"
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-col text-center md:text-start">
            <a
              href="#"
              className="text-slate-400 hover:text-primary duration-150 font-extralight font-sans mb-2"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-primary duration-150 font-extralight font-sans mb-2"
            >
              Install Guide
            </a>
          </div>
          <a
            href="#"
            className="text-slate-400 hover:text-primary duration-150 font-extralight font-sans"
          >
            Press Kit
          </a>
          {/* {links.map((link, i) => (
            <a
              href={link.url}
              className="text-slate-600 font-extralight font-sans"
            >
              {link.label}
            </a>
          ))} */}
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <img src={iconFb} className="w-4 h-4 social-icon" alt="" />
          <img src={iconTwitter} className="w-4 h-4 social-icon" alt="" />
          <img src={iconInstagram} className="w-4 h-4 social-icon" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default App;
