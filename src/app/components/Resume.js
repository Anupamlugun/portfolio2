import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Resume() {
  // Education data array
  const educationData = [
    {
      id: 1,
      title: "Master of Computer Applications",
      period: "2023 - 2025",
      institution: "Jharkhand Rai University, Ranchi",
      description:
        "Completed Master of Computer Applications (MCA), gaining strong skills in software development, algorithms, and system design.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Bachelor of Computer Applications",
      period: "2020 - 2023",
      institution: "Jharkhand Rai University, Ranchi",
      description:
        "Completed Bachelor of Computer Applications (BCA) with foundational knowledge in programming, databases, and software development.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
  ];

  // Experience data array
  const experienceData = [
    {
      id: 1,
      title: "Java Developer",
      period: "2025 - Present",
      company: "Sparrow Softech Pvt Ltd",
      responsibilities: [
        "Develop and maintain web applications using Java Spring Boot and React.js",
        "Implement RESTful APIs for seamless data exchange",
        "Collaborate with cross-functional teams to deliver high-quality software",
        "Optimize application performance and scalability",
      ],
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="resume" className="py-20 flex justify-center bg-brand-soft">
      <div className="container">
        {/* Section Title */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-mythemecolor mb-4">Resume</h2>
          <p className="text-lg text-brand-soft-foreground max-w-2xl mx-auto">
            Master’s degree completed. Experienced in software development with
            Java Spring Boot(Microservices) React.js and other Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          {/* Education Column */}
          <div className="relative" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-8 pl-8 border-l-4 border-mythemecolor text-mythemecolor">
              Education
            </h3>

            <div className="space-y-8 pl-8 relative before:absolute before:left-[-2px] before:top-0 before:w-1 before:h-full before:bg-gray-200">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative pl-10">
                  <div className="absolute left-[-25px] top-2 w-12 h-12 rounded-full bg-mythemecolor flex items-center justify-center text-white border-4 border-white shadow-lg">
                    {edu.icon}
                  </div>
                  <Card className="bg-card shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">
                        {edu.title}
                      </CardTitle>
                      <p className="text-mythemecolor font-medium">
                        {edu.period}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-brand-soft-foreground">
                        <em>{edu.institution}</em>
                      </p>
                      <p className="text-brand-soft-foreground mt-4">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="relative" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-8 pl-8 border-l-4 border-mythemecolor text-mythemecolor">
              Experience
            </h3>

            <div className="space-y-8 pl-8 relative before:absolute before:left-[-2px] before:top-0 before:w-1 before:h-full before:bg-gray-200">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative pl-10">
                  <div className="absolute left-[-25px] top-2 w-12 h-12 rounded-full bg-mythemecolor flex items-center justify-center text-white border-4 border-white shadow-lg">
                    {exp.icon}
                  </div>
                  <Card className="bg-card shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">
                        {exp.title}
                      </CardTitle>
                      <p className="text-mythemecolor font-medium">
                        {exp.period}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-brand-soft-foreground">
                        <em>{exp.company}</em>
                      </p>
                      <ul className="mt-4 space-y-2 pl-4 list-disc text-brand-soft-foreground">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
