import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("should render the page", () => {
    render(<HomePage />);
    const title = screen.getByText("Aaron Lambley");
    expect(title).toBeInTheDocument();
  });

  describe("Content", () => {
    describe("Biography Card", () => {
      it("should render a biography card with a title", () => {
        render(<HomePage />);
        const biographyCard = screen.getByText("Aaron Lambley");
        expect(biographyCard).toBeInTheDocument();
      });

      it("should render a biography card with a description", () => {
        render(<HomePage />);
        const biographyCard = screen.getByText(
          "Fullstack Developer 💻 | Web-Dev Enthusiast 🌐 | Bookworm 📚 | Dog Lover 🐶"
        );
        expect(biographyCard).toBeInTheDocument();
      });
    });

    describe("CV Button", () => {
      it("should render a button with a link to the CV", () => {
        render(<HomePage />);
        const cvButton = screen.getByText("View my CV");
        expect(cvButton).toBeInTheDocument();
      });

      it("should open the CV in a new tab", () => {
        render(<HomePage />);
        const cvButton = screen.getByText("View my CV");
        expect(cvButton).toHaveAttribute("target", "_blank");
      });
    });

    describe("Contact Form", () => {
      it("should render with a heading", () => {
        render(<HomePage />);
        const contactFormHeading = screen.getByText("Contact Me");

        expect(contactFormHeading).toBeInTheDocument();
      });
      it("should render a contact form", () => {
        render(<HomePage />);
        const contactForm = screen.getByLabelText("Contact Form");
        expect(contactForm).toBeInTheDocument();
      });
    });
  });
});
