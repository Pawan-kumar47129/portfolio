// --- Projects Section ---
import { motion } from "framer-motion";
import { Badge } from "./components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const projectsData = [
  {
    id: "1",
    title: "YouTube Backend System",
    description:
      "Developed a scalable backend for a YouTube-like platform featuring video uploads, streaming, subscriptions, likes, and comment system with proper authentication.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer", "Cloudinary"],
    imageUrl: "youtube.png",
    liveUrl: "#",
    codeUrl: "https://github.com/Pawan-kumar47129/Youtube-Backend",
  },
  {
    id: "2",
    title: "Blog App (MERN Stack)",
    description:
      "A full-stack blogging application allowing users to register, create blog posts, edit/delete content, and interact via comments with authentication and role-based access.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    imageUrl: "blog.png",
    liveUrl: "#",
    codeUrl: "https://github.com/Pawan-kumar47129/BlogApp",
  },
  {
    id: "3",
    title: "Real-Time Chat App",
    description:
      "Built a real-time chat application supporting one-on-one messaging, group chats, and user presence tracking using WebSockets.",
    technologies: ["React", "Node.js", "Socket.IO", "Express.js", "MongoDB"],
    imageUrl: "chat.png",
    liveUrl: "#",
    codeUrl: "https://github.com/Pawan-kumar47129/chatty",
  },
  {
    id: "4",
    title: "Room Booking Website",
    description:
      "A hotel/room booking system where users can browse available rooms, select check-in/out dates, and book with secure authentication and payment.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
    imageUrl: "room.png",
    liveUrl: "#",
    codeUrl: "https://github.com/Pawan-kumar47129/Listing",
  },
  {
    id: "5",
    title: "Movie Website",
    description:
      "A full-featured movie website where users can explore movies, view trailers, book showtimes, and select seats in a dynamic UI.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
    imageUrl: "movie.png",
    liveUrl: "#",
    codeUrl: "https://github.com/Pawan-kumar47129/MovieApp",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-200 text-gray-800 border-gray-300 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto rounded-md object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-300 text-gray-800 border-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-gray-800 border-purple-500/30 hover:border-purple-500/50 hover:from-purple-500/20 hover:to-blue-500/20 dark:bg-gradient-to-r dark:from-purple-500/20 dark:to-blue-500/20 dark:text-white dark:border-purple-500/30 dark:hover:border-purple-500/50 dark:hover:from-purple-500/30 dark:hover:to-blue-500/30"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-gray-800 border-purple-500/30 hover:border-purple-500/50 hover:from-purple-500/20 hover:to-blue-500/20 dark:bg-gradient-to-r dark:from-purple-500/20 dark:to-blue-500/20 dark:text-white dark:border-purple-500/30 dark:hover:border-purple-500/50 dark:hover:from-purple-500/30 dark:hover:to-blue-500/30"
                    >
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;