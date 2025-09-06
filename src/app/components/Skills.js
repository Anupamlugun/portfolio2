import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaReact, 
  FaNodeJs, 
  FaJava,
  FaDatabase
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiJavascript, 
  SiSpringboot, 
  SiApachekafka, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb,
  SiPhp
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-blue-500" />,
      skills: [
        { name: "HTML", value: 90, icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", value: 70, icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Bootstrap", value: 70, icon: <FaBootstrap className="text-purple-600" /> },
        { name: "TailwindCSS", value: 50, icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "JavaScript", value: 80, icon: <SiJavascript className="text-yellow-500" /> },
        { name: "React", value: 80, icon: <FaReact className="text-blue-500" /> },
      ]
    },
    {
      title: "Backend",
      icon: <FaJava className="text-red-500" />,
      skills: [
        { name: "Java", value: 80, icon: <FaJava className="text-red-500" /> },
        { name: "Nodejs", value: 50, icon: <FaNodeJs className="text-green-600" /> },
        { name: "Spring Boot", value: 80, icon: <SiSpringboot className="text-green-500" /> },
        { name: "Apache Kafka", value: 50, icon: <SiApachekafka className="text-black" /> },
        { name: "PHP", value: 50, icon: <SiPhp className="text-purple-500" /> },
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-blue-400" />,
      skills: [
        { name: "MySQL", value: 70, icon: <SiMysql className="text-blue-700" /> },
        { name: "PostgreSQL", value: 70, icon: <SiPostgresql className="text-blue-800" /> },
        { name: "MongoDB", value: 50, icon: <SiMongodb className="text-green-600" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 flex justify-center bg-brand-soft">
      <div className="container">
        {/* Section Title */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-mythemecolor mb-4">Skills</h2>
          <p className="text-lg text-brand-soft-foreground max-w-2xl mx-auto">
            Here are my skills organized by category: Frontend Development, Backend Technologies, Databases, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="p-6 shadow-lg bg-card border-0"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-brand-soft mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-mythemecolor">{category.title}</h3>
              </div>
              
              <CardContent className="p-0 space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-2">
                      <div className="mr-3 text-lg">
                        {skill.icon}
                      </div>
                      <span className="font-medium flex-grow">{skill.name}</span>
                      <span className="text-brand-soft-foreground font-semibold">
                        {skill.value}%
                      </span>
                    </div>
                    <Progress
                      value={skill.value}
                      className="h-2 bg-gray-200"
                      indicatorClassName="bg-blue-500"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency level`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.value}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}