import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

jest.mock("@/components/navigation", () => {
  return () => <nav>Navigation</nav>;
});

jest.mock("@vercel/analytics/react", () => {
  return {
    Analytics: () => <div></div>,
  };
});

jest.mock("@vercel/speed-insights/next", () => {
  return {
    SpeedInsights: () => <div></div>,
  };
});

describe("RootLayout", () => {
  it("should render the layout", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );

    expect(screen.getByText("Navigation")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
