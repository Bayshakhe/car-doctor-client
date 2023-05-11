import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero py-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative lg:w-1/2">
        <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
        <img src={parts} className="max-w-sm rounded-lg shadow-2xl lg:absolute right-0 top-1/2 border-white border-8" />
        </div>
        <div className="lg:w-1/2">
          <h5 className="font-extrabold text-xl text-orange-600">About Us</h5>
          <h2 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h2>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn bg-orange-600 border-0 mt-4">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
