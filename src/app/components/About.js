import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function About() {
  function calculateAge(birthdayStr) {
    const birthDate = new Date(birthdayStr);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const content = {
    title: "About",
    description:
      "Software Developer with hands-on expertise in Java, Spring Boot, React.js,Node.js, PHP MySQL and  PostgreSQL. Proficient in building end-to-end web applications using modern frameworks. Strong experience in RESTful API integration, agile workflows, and optimizing user experience.",
    profile: {
      image: "/img/profile.jpg",
      alt: "profile",
      title: "Software Developer",
      bio: "I am Software Developer who loves building apps, playing football, and exploring new tech.",
      details: [
        [
          { label: "Birthday:", value: "27 Feb 2002" },
          { label: "Phone:", value: "+919608683352" },
        ],
        [
          { label: "Age:", value: calculateAge("27 Feb 2002") },
          { label: "City:", value: "Simdega" },
        ],
      ],
    },
  };

  return (
    <section id="about" className="py-20 flex justify-center bg-brand-soft">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-mythemecolor mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-brand-soft-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>
        <Card className="p-8 bg-card" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="lg:w-1/3">
              <Image
                src={content.profile.image}
                alt={content.profile.alt}
                width={300}
                height={300}
                className="mx-auto h-64 w-64 rounded-full object-cover shadow-md border-2 border-primary/10"
              />
            </div>

            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-mythemecolor">
                {content.profile.title}
              </h2>
              <p className="text-brand-soft-foreground italic">
                {content.profile.bio}
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {content.profile.details.map((detailGroup, groupIndex) => (
                  <div key={groupIndex} className="space-y-2">
                    {detailGroup.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex items-center gap-2"
                      >
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span className="font-medium text-mythemecolor">
                          {detail.label}
                        </span>
                        <span className="text-brand-soft-foreground">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
