import { Button } from '@material-tailwind/react'
import { Link, routes } from '@redwoodjs/router'


type BlogLayoutProps = {
  children?: React.ReactNode
}


const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
< header className = "bg-white border-b border-gray-200" >
<div className="container mx-auto px-4">
      <section className="flex justify-between items-center py-4">
         <h1>
          <Link to={routes.home()}>Bob's Backyard</Link>
        </h1>
        <nav className="flex items-center">
          <div className="lg:hidden">&#9776;</div>
          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link to={routes.contact()} className="text-black no-underline">Contact</Link>
            </li>
            <li>
               <Link to={routes.portfolio()} className="text-black no-underline">Portfolio</Link>
            </li>
            <li>
              <Link to={routes.services()} className="text-black no-underline">Services</Link>
            </li>
             <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
               <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="h-screen flex flex-col justify-center items-center space-y-4">
        <h2 className="text-2xl">Welcome to Bob's Backyards</h2>
        <h3 className="text-l">Your landscaping prayers are answered!</h3>

        <Link to={routes.contact()} className="text-black no-underline"><Button
          color="blue"
          className="bg-black text-white py-2 px-4 no-underline"
        >
          Book a Quote
        </Button></Link>

      </section>
    </div>
    </header>
    
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
