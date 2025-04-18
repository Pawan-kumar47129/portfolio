import { motion } from "framer-motion";
import { Badge } from "./components/ui/badge";

const certificationData = [
  {
    id: "1",
    title: "Web Development",
    organization: "Coursera",
    date: "2024",
    description:
      "Gained in-depth knowledge of HTML, CSS, and JavaScript, including responsive design principles, DOM manipulation, and modern ES6+ features. Successfully completed a project-based certification program.",
    technologies: ["HTML", "CSS","JavaScript"],
    imageUrl: "web.png",
  },
  {
    id: "2",
    title: "Data Structure and Algorithm",
    organization: "Coursera",
    date: "2024",
    description:
      "Developed a strong understanding of data structures and algorithms, focusing on problem-solving techniques, time complexity, and optimization strategies.",
    technologies: ["Algorithms", "Data Structures", "Problem Solving", "Optimization"],
    imageUrl: "dynemic.png",
  },
  
  {
    id: "3",
    title: "Backend Development Certification",
    organization: "PhysicsWallah",
    date: "2024",
    description:
      "Completed a comprehensive program covering  backend development, including  JavaScript, Node.js, and MongoDB.",
    technologies: [ "JavaScript", "Node.js","Express.js", "MongoDB"],
    imageUrl: "backend.png",
  },
];

const Certification = () => {
  return (
    <section
      id="certification"
      className="py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-gray-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              {/* Image Box */}
              <div className="mb-4">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* Certification Details */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {cert.organization}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                {cert.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
