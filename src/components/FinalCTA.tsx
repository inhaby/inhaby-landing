import { motion } from "motion/react";
import AppBadge from "./AppBadge";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-8">
              Start finding your home today
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of happy renters who found their perfect space with INHABY. Download now and start your journey.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center items-center">
              <AppBadge type="apple" theme="light" />
              <AppBadge type="google" theme="light" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
