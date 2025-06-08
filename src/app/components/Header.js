import Image from "next/image";
import Link from "next/link";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoWhatsapp,
  BiMailSend,
  BiHomeSmile,
  BiIdCard,
  BiBrain,
  BiCodeAlt,
  BiFileBlank,
} from "react-icons/bi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Header({ mobileMenuOpen }) {
  return (
    <Card
      className={`fixed ${
        mobileMenuOpen ? "-left-80" : "left-0"
      } top-0 z-50 h-screen w-[300px] rounded-none border-0 bg-gray-900 text-white shadow-lg transition-all duration-300 lg:left-0`}
    >
      <CardContent className="flex h-full flex-col p-4">
        {/* Profile image - Keeping original Image component */}
        <div className="mx-auto mt-8 h-32 w-32 overflow-hidden rounded-full">
          <Image
            width={128}
            height={128}
            src="/img/profile.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Logo */}
        <CardHeader className="p-2">
          <CardTitle className="text-center text-2xl">
            <Link href="/">Anupam Lugun</Link>
          </CardTitle>
        </CardHeader>

        {/* Social links */}
        <div className="mb-6 flex justify-center space-x-4">
          {[
            {
              name: "linkedin",
              icon: <BiLogoLinkedin className="text-xl" />,
              url: "https://www.linkedin.com/in/anupam-lugun",
            },
            {
              name: "github",
              icon: <BiLogoGithub className="text-xl" />,
              url: "https://github.com/Anupamlugun",
            },
            {
              name: "whatsapp",
              icon: <BiLogoWhatsapp className="text-xl" />,
              url: "https://wa.me/9608683352",
            },
            {
              name: "email",
              icon: <BiMailSend className="text-xl" />,
              url: "mailto:anupam.lugun.272@gmail.com",
            },
          ].map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-gray-800 hover:text-mythemecolor"
              asChild
            >
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </Link>
            </Button>
          ))}
        </div>

        <Separator className="bg-gray-700" />

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="space-y-2">
            {[
              {
                href: "#hero",
                icon: <BiHomeSmile className="text-lg" />,
                text: "Home",
              },
              {
                href: "#about",
                icon: <BiIdCard className="text-lg" />,
                text: "About",
              },
              {
                href: "#skills",
                icon: <BiBrain className="text-lg" />,
                text: "Skills",
              },
              {
                href: "#projects",
                icon: <BiCodeAlt className="text-lg" />,
                text: "Projects",
              },
              {
                href: "#resume",
                icon: <BiFileBlank className="text-lg" />,
                text: "Resume",
              },
            ].map((item) => (
              <li key={item.text}>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 rounded-md p-2 text-white hover:bg-gray-800 hover:text-mythemecolor"
                  asChild
                >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
}
