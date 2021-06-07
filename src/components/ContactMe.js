import {motion} from "framer-motion";

function ContactMe() {
  return <motion.div whileHover={{scale:1.02}} className={"contact-me-container m-auto text-center text-capitalize"}>
    <div className={"mt-4 mb-4"}>
      <h1>wanna say Hello?</h1>
      <span className={"m-2"}>
        <i className="fa fa-envelope-o" aria-hidden="true"/>
        <a className={"social-link"} href={"mailto:mohieddintana93@gmail.com"}>mohieddintana93@gmail.com</a>
      </span>
      <span className={"m-2"}>
        <i className="fa fa-calendar-check-o" aria-hidden="true"/>
        <a className={"social-link"} href={"https://calendly.com/mohie/30min"}>Collaborate</a></span>
    </div>
    <hr className={"m-auto w-25"}/>
    <div className={"mt-4"}>
      <h1>find me online</h1>
      <a className="social-icon fa fa-linkedin-square" aria-hidden="true" href={"https://www.linkedin.com/in/mohie93/"} target={"_blank"} rel="noreferrer"> </a>
      <a className="social-icon fa fa-twitter-square" aria-hidden="true" href={"https://twitter.com/MohieddinTanna"} target={"_blank"} rel="noreferrer"> </a>
      <a className="social-icon fa fa-github-square" aria-hidden="true" href={"https://github.com/mohie93"} target={"_blank"} rel="noreferrer"> </a>
      <a className="social-icon fa fa-medium" aria-hidden="true" href={"https://medium.com/@mohie93"} target={"_blank"} rel="noreferrer"> </a>
    </div>
  </motion.div>
}

export default ContactMe;