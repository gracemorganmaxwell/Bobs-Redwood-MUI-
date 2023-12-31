import { Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton, } from '@material-tailwind/react'
import { Link, routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
type BlogLayoutProps = {
  children?: React.ReactNode
}

const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (<ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <Link to={routes.about()} className="flex items-center">About</Link>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <Link to={routes.portfolio()} className="flex items-center">Portfolio</Link>
  </Typography>
  <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-normal"
  >
     <Link to={routes.services()} className="flex items-center">Services</Link>
    </Typography><Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <Link to={routes.contact()} className="flex items-center">Contact</Link>
    </Typography>
      </ul>
  );


const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
    <header>
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          className="mr-4 cursor-pointer py-1.5 font-medium"
        > <Link to={routes.home()} />
          Bob's Backyard</Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span>Book a Quote</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
        <section className="bg-blue-100">
    <h2 className="text-2xl">Welcome to Bob's Backyards</h2>
        <h3 className="text-l">Your landscaping prayers are answered!</h3>
        </section>
    </header>

      <main>{children}</main>
    </>
  )
}


export default BlogLayout
