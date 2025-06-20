import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

// Certification data
const certificates = [
  {
    title: "Web Development",
    issuer: "Intershaala",
    date: "August 2022",
    link: "https://trainings.internshala.com/view_certificate/71492F80-74DE-00FA-7445-C36C85E91680/F271AB9A-6F48-8921-7C13-6A8D4DF8109F/",
    image:
      "https://training-uploads.internshala.com/certificates/COC-F271AB9A-6F48-8921-7C13-6A8D4DF8109F.jpg",
  },
  {
    title: "Node Js",
    issuer: "Intershaala",
    date: "January 2025",
    link: "https://trainings.internshala.com/certificate/view/nsdc/dk3p2b4e4pd/eijbfj4ja5d/",
    image:
      "https://training-uploads.internshala.com/nsdc-certificate-images/8qjq7uz7xhp.jpg",
  },
];

const Certification = () => (
  <section id="certification" className="py-20 bg-brand-soft">
    <div className="max-w-6xl mx-auto px-4">
      {/* Section Title */}
      <div className="mb-16 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-mythemecolor mb-4">
          My Certifications
        </h2>
        <p className="text-lg text-brand-soft-foreground max-w-2xl mx-auto">
          Explore the certifications that reflect my technical skills,
          continuous learning, and dedication to professional growth.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {certificates.map((cert, idx) => (
          <Card
            key={idx}
            className="flex flex-col justify-between h-[500px] border border-border hover:shadow-lg transition-shadow duration-300 w-full sm:w-[90%] md:w-[45%] lg:w-[30%]"
          >
            {/* Header: Certificate Image */}
            <CardHeader className="flex items-center justify-center pt-6 pb-0 h-[180px]">
              <Image
                src={cert.image || "/placeholder-certificate.png"}
                alt={`${cert.title} certificate`}
                width={300}
                height={160}
                className="rounded object-contain"
              />
            </CardHeader>

            {/* Content: Title, Issuer, Date */}
            <CardContent className="flex-1 px-6 pt-0 flex flex-col justify-center">
              <CardTitle className="text-lg md:text-xl text-mythemecolor mt-4 mb-2 text-center">
                {cert.title}
              </CardTitle>
              <div className="text-sm text-brand-soft-foreground text-center">
                <span className="font-medium">{cert.issuer}</span>
                <span className="mx-2">|</span>
                <span>{cert.date}</span>
              </div>
            </CardContent>

            {/* Footer: Button */}
            <CardFooter className="px-6 pb-6">
              <Button
                asChild
                variant="mybuttontheme"
                size="sm"
                className="w-full"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate: ${cert.title}`}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Certification;
