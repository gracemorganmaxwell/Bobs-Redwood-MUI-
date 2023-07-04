import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";


 const services = [
    {
      title: "Landscape Design",
      image: "landscape-design.jpg",
      blurb:
        "A landscaper can provide professional design services, working closely with clients to create custom landscape plans that suit their preferences and needs. This includes developing layouts, selecting appropriate plants and materials, and creating an overall vision for the outdoor space."
    },
    {
      title: "Landscape Design",
      image: "landscape-design.jpg",
      blurb:
        "A landscaper can provide professional design services, working closely with clients to create custom landscape plans that suit their preferences and needs. This includes developing layouts, selecting appropriate plants and materials, and creating an overall vision for the outdoor space."
    },
    {
      title: "Landscape Design",
      image: "landscape-design.jpg",
      blurb:
        "A landscaper can provide professional design services, working closely with clients to create custom landscape plans that suit their preferences and needs. This includes developing layouts, selecting appropriate plants and materials, and creating an overall vision for the outdoor space."
    },
    {
      title: "Landscape Design",
      image: "landscape-design.jpg",
      blurb:
        "A landscaper can provide professional design services, working closely with clients to create custom landscape plans that suit their preferences and needs. This includes developing layouts, selecting appropriate plants and materials, and creating an overall vision for the outdoor space."
    },
    {
      title: "Landscape Design",
      image: "landscape-design.jpg",
      blurb:
        "A landscaper can provide professional design services, working closely with clients to create custom landscape plans that suit their preferences and needs. This includes developing layouts, selecting appropriate plants and materials, and creating an overall vision for the outdoor space."
    },
    {
      title: "Landscape Design",
      image: "landscape-design.jpg",
      blurb:
        "A landscaper can provide professional design services, working closely with clients to create custom landscape plans that suit their preferences and needs. This includes developing layouts, selecting appropriate plants and materials, and creating an overall vision for the outdoor space."
    },
  ];

const ServicesPage = () => {
  return (
    <>
      <MetaTags title="Services" description="Services page" />

      <h1>ServicesPage</h1>
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h2 className="font-bold text-lg mb-2">{service.title}</h2>
            <img src={service.image} alt={service.title} className="mb-2" />
            <p>{service.blurb}</p>
          </div>
        ))}
      </div>
    </div>

    
    </>
  );
};

export default ServicesPage;
