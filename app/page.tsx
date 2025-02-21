import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <main className="w-full m-auto p-4 flex flex-col items-center justify-center bg-main text-text">
      <Card className="bg-bg w-full md:w-3/4 xl:w-1/2 mb-4">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl">Aaron Lambley</CardTitle>
          <CardDescription className="text-lg">
            Fullstack Developer 💻 | Web-Dev Enthusiast 🌐 | Bookworm 📚 | Dog
            Lover 🐶
          </CardDescription>
        </CardHeader>
        <CardContent className="text-xl">
          <div className="flex justify-center mb-4">
            <Button variant="default" size="default">
              <Link
                href="https://drive.google.com/file/d/15az5jAl01qd-3bCD3o2CqrL090N0n7gR/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2"
              >
                View my CV <FontAwesomeIcon icon={faFile} />
              </Link>
            </Button>
          </div>
          <section>
            <div className="mb-4">
              Experienced Ruby on Rails and JavaScript developer skilled in
              startup and technical consultancy settings, and well-practiced at
              working within agile methodology environments. Passionate about
              learning and advancing my skills in fullstack development and
              DevOps.
            </div>
            <div className="mb-4">
              Formerly, specialized in non-fiction publishing with a focus on
              physical and digital sales, including ecommerce and data
              analytics.
            </div>
            <div className="mb-4">
              Currently working at{" "}
              <Link
                href="https://www.solirius.com/"
                className="text-text hover:text-main underline"
              >
                Solirius Consulting
              </Link>
              .
            </div>
          </section>
        </CardContent>
      </Card>
      <Card className="bg-bg w-full md:w-3/4 xl:w-1/2 mb-4">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl">Contact Me</CardTitle>
          <CardDescription className="text-lg">
            If you have any questions or would like to get in touch, please fill
            out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </main>
  );
}
