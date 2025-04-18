import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    items: ["Java", "C++", "C", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Redux",
      "Next.js",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    category: "Other",
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Data Structures Algorithms",
      "Object-Oriented Programming (OOP)",
    ],
  },
];

const skillLogos = new Map([
  ["Java", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
  ["C++", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"],
  ["C", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"],
  ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
  ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
  ["TypeScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"],
  ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
  ["CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
  ["Tailwind CSS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s"],
  ["Redux", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"],
  ["Next.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"],
  ["Framer Motion", "https://tsh.io/wp-content/uploads/fly-images/32664/framer-motion-logo-1-312x211.png"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"],
  ["Express.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"],
  ["GraphQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"],
  ["PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"],
  ["Firebase", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"],
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
  ["Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"],
  ["CI/CD", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
  ["Data Structures Algorithms", "https://png.pngtree.com/png-clipart/20230925/original/pngtree-data-structures-and-algorithms-concept-icon-symbol-editable-general-vector-png-image_12695241.png"],
  ["Object-Oriented Programming (OOP)", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
]);

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-4">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillCategory.items.map((skill: string) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-gray-200 text-gray-800 border-gray-300 p-2 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    <img
                      src={skillLogos.get(skill)}
                      alt={skill}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
