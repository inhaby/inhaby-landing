import { motion } from "motion/react";

const previews = [
  { color: "from-blue-400 to-blue-600", title: "Explore" },
  { color: "from-purple-400 to-purple-600", title: "Verify" },
  { color: "from-green-400 to-green-600", title: "Connect" },
  { color: "from-orange-400 to-orange-600", title: "Book" },
];

export default function AppPreview() {
  return (
    <section className="py-24 overflow-hidden bg-slate-950 text-white">
      <div className="container px-6 mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            Designed for the modern renter.
          </h2>
          <p className="text-slate-400 text-lg">
            Experience a seamless interface that makes finding your next home as easy as ordering dinner.
          </p>
        </motion.div>
      </div>

      <div className="flex overflow-x-auto pb-12 px-6 space-x-8 no-scrollbar">
        {previews.map((preview, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex-shrink-0 w-[260px] md:w-[300px]"
          >
            <div className="relative aspect-[9/19.5] bg-slate-900 rounded-[2.5rem] p-3 border-4 border-slate-800 shadow-2xl">
              <div className={`w-full h-full rounded-[2rem] bg-gradient-to-br ${preview.color} flex items-center justify-center p-6`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold">{preview.title}</h3>
                  <div className="mt-8 space-y-3">
                    <div className="h-2 w-full bg-white/20 rounded"></div>
                    <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                    <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
