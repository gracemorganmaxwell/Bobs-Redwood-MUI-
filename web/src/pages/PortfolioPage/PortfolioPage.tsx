import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

const project = [
        {
          title: "The Smiths",
          beforeImage: "before.jpg",
          afterImage: "after.jpg",
          review:
            "We are so happy with the work done by Bob's Backyards. Our garden has never looked better!"
        },
        {
          title: "The Andersons",
          beforeImage: "before.jpg",
          afterImage: "after.jpg",
          review:
            "We are so happy with the work done by Bob's Backyards. Our garden has never looked better!"
        },
        {
          title: "The Rogans",
          beforeImage: "before.jpg",
          afterImage: "after.jpg",
          review:
            "We are so happy with the work done by Bob's Backyards. Our garden has never looked better!"
        },
      ];

const PortfolioPage = () => {
  return (
    <>
    <MetaTags title="Portfolio" description="Portfolio page" />

    <div className="container mx-auto px-4 py-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {project.map((project, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h2 className="font-bold text-lg mb-2">{project.title}</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <img src={project.beforeImage} alt="Before" className="mb-2" />
                <p>Before</p>
              </div>
              <div>
                <img src={project.afterImage} alt="After" className="mb-2" />
                <p>After</p>
              </div>
            </div>
            <p className="mt-2">{project.review}</p>
          </div>
          )
        )
      };
      </div>
      <a href="#contact" className="bg-black text-white py-2 px-4 no-underline">
        Book a Quote
      </a>
    </div>
    </>
  );
};

export default PortfolioPage;
