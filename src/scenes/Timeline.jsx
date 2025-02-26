import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import "../index.css";

const Timeline = () => {
  return (
    <section id="timeline" className="mt-32">
      <div className="md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            TIME <span className="text-red">LINE</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>
      <motion.div
        className="md:w-full mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="w-full mx-auto relative  text-center ">
          <li className="my-8 first:mt-0 last:mb-0 w-[60%]mx-auto flex flex-col justify-center items-center ">
            <ul className="timeline">
              {/* Item 1 */}
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Registrations Open</span>
                  </div>
                  <div className="desc">11th OF MARCH</div>
                </div>
              </li>
              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Registrations Close</span>
                    
                  </div>
                  <div className="desc">
                  25th OF MARCH
                  </div>
                </div>
              </li>
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Awareness Session 1 </span>
                  </div>
                  <div className="desc">MARCH LAST WEEKEND</div>
                </div>
              </li>
              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Awareness Session 2 </span>
                    
                  </div>
                  <div className="desc">
                  MAY 1ST WEEK
                  </div>
                </div>
              </li>
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Event Date </span>
                  </div>
                  <div className="desc">JUNE 1ST WEEK</div>
                </div>
              </li>
            </ul>
          </li>
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
