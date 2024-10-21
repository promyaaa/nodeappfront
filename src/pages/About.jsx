import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="p-10">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat aperiam deserunt accusantium. Nostrum, vel. 
              Illo dolores maxime officia unde, natus, ullam debitis explicabo ex ipsa accusamus earum repellat eveniet.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat aperiam deserunt accusantium. Nostrum, vel. 
              Illo dolores maxime officia unde, natus, ullam debitis explicabo ex ipsa accusamus earum repellat eveniet.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat aperiam deserunt accusantium. Nostrum, vel. 
              Illo dolores maxime officia unde, natus, ullam debitis explicabo ex ipsa accusamus earum repellat eveniet.
            </p>
          </div>
        </div>
      </div>
      </div>

    </div>
    <Footer />
    </>
  );
};

export default About;
