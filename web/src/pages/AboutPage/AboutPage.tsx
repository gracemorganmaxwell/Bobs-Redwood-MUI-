import { MetaTags } from '@redwoodjs/web'



const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <br />
      <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Owner"
          className="rounded-full w-48 h-48 md:mr-8"
        />
        <p className="mt-4 md:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc at aliquet pharetra, mauris lorem lacinia magna, a ultrices
          ligula metus ac nunc. Mauris in orci sed nisl dictum dapibus.
        </p>
      </div>
    </div>

    </>
  )
}

export default AboutPage
