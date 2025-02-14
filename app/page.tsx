import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <main className="h-[calc(100vh-96px)] w-full m-auto p-4 flex flex-col items-center justify-center bg-main text-text">
      <Card className="bg-bg w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <CardHeader className="flex items-center justify-center">
          <CardTitle>Aaron Lambley</CardTitle>
          <CardDescription>
            Fullstack Developer 💻 | Web-Dev Enthusiast 🌐 | Bookworm 📚 | Dog
            Lover 🐶
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-4">
            <Button variant="default" size="default">
              <a
                href="https://drive.google.com/file/d/15az5jAl01qd-3bCD3o2CqrL090N0n7gR/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2"
              >
                View my CV <FontAwesomeIcon icon={faFile} />
              </a>
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
              Currently learning NestJS framework and using Redis and Docker.
            </div>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
