import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const skills = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 70 },
    { name: "Bootstrap", value: 70 },
    { name: "TalwindCSS", value: 50 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 80 },
    { name: "Java", value: 80 },
    { name: "Nodejs", value: 50 },
    { name: "Spring Boot", value: 80 },
    { name: "Apache Kafka", value: 50 },
    { name: "PHP", value: 50 },
    { name: "MySQL", value: 70 },
    { name: "PostgreSQL", value: 70 },
    { name: "MongoDB", value: 50 },
  ];

  return (
    <section id="skills" className="py-20 flex justify-center bg-brand-soft">
      <div className="container">
        {/* Section Title */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-mythemecolor mb-4">Skills</h2>
          <p className="text-lg text-brand-soft-foreground max-w-2xl mx-auto">
            Here are my skills: Full Stack Development, REST APIs, Node.js,
            Spring Boot, PHP and others below.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 px-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {skills.map((skill, index) => (
            <Card key={index} className="p-4 shadow-sm bg-card">
              <CardContent className="p-0">
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-brand-soft-foreground">
                    {skill.value}%
                  </span>
                </div>
                <Progress
                  value={skill.value}
                  className="h-2 bg-gray-200"
                  indicatorClassName="bg-blue-500"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
