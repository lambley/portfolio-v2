import { Mail, FileText, Briefcase, Book, Heart, Code } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${
  import.meta.env.VITE_FORMSPREE_ID
}`;

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message Sent!", {
          description: "Thank you for reaching out! I'll be in touch soon.",
        });
        setMessage("");
        setEmail("");
        setIsSubmitted(true);
      } else {
        toast.error("Submission Failed", {
          description:
            "An error occurred while sending the message. Please check your form data.",
        });
      }
    } catch (error) {
      toast.error("Network Error", {
        description:
          "Could not reach the server. Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-black rounded-full mx-auto mb-4 flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-white text-3xl font-bold">AL</span>
          </div>
          <h1 className="mb-4">Aaron Lambley</h1>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge
              variant="secondary"
              className="flex items-center gap-1 border-2 border-black bg-yellow-300 hover:bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Code className="w-3 h-3" />
              Fullstack Developer
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-1 border-2 border-black bg-pink-300 hover:bg-pink-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Briefcase className="w-3 h-3" />
              Web Dev Enthusiast
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-1 border-2 border-black bg-green-300 hover:bg-green-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Book className="w-3 h-3" />
              Bookworm
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-1 border-2 border-black bg-purple-300 hover:bg-purple-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Heart className="w-3 h-3" />
              Animal Lover
            </Badge>
          </div>
        </div>

        <Card className="mb-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-4">
              Experienced Ruby on Rails and JavaScript developer skilled in
              startup and technical consultancy settings, and well-practiced at
              working within agile methodology environments. Passionate about
              learning and advancing my skills in fullstack development and
              DevOps.
            </p>
            <p className="text-gray-700 mb-4">
              Formerly, specialized in non-fiction publishing with a focus on
              physical and digital sales, including ecommerce and data
              analytics.
            </p>
            <p className="text-gray-700">
              Currently working at{" "}
              <a
                href="https://www.solirius.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline font-bold"
              >
                Solirus Reply
              </a>
              .
            </p>
          </CardContent>
        </Card>

        <Button
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
        >
          <a
            href="https://drive.google.com/file/d/15az5jAl01qd-3bCD3o2CqrL090N0n7gR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-3 gap-2"
          >
            <FileText className="w-4 h-4" />
            View my CV
          </a>
        </Button>
      </div>

      {/* Contact Section */}
      <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h2 className="mb-2">Contact Me</h2>
            <p className="text-gray-600">
              If you have any questions or would like to get in touch, please
              fill out the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="message"
                className="block text-sm mb-2 text-gray-700 font-bold"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="border-2 border-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 text-gray-700 font-bold"
              >
                Email
              </label>
              <Input
                id="email"
                name="_replyto"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-black"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full bg-blue-400 hover:bg-blue-500 text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all gap-2"
            >
              <Mail className="w-4 h-4" />
              {isSubmitting ? "Sending..." : isSubmitted ? "Sent!" : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
