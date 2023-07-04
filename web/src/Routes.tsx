import { Router, Route, Set } from '@redwoodjs/router'

import BlogLayout from './layouts/BlogLayout/BlogLayout'


const Routes = () => {
  return (
    <Router>
    <Set wrap={BlogLayout}>

      <Route path="/portfolio" page={PortfolioPage} name="portfolio" />
      <Route path="/services" page={ServicesPage} name="services" />
        <Route path="/Contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
