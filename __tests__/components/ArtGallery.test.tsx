import { render, screen } from "@testing-library/react";
import ArtGallery from "components/ArtGallery/ArtGallery";
import "@testing-library/jest-dom";

const ART_DATA = [
  {
    artist: "John Doe",
    title: "Art from the Web 1",
    created_at: "2022",
    medium: "Digital",
    description: "This is the description for Art from the Web 1",
    image_url: "/images/art/lowboy_1943.8.7876.jpg",
  },
  {
    artist: "John Doe",
    title: "Art from the Web 2",
    created_at: "2022",
    medium: "Digital",
    description: "This is the description for Art from the Web 2",
    image_url: "/images/art/lowboy_1943.8.7876.jpg",
  },
];

describe("ArtGallery", () => {
  it("renders ArtGalleryItem components", () => {
    render(<ArtGallery data={ART_DATA} />);

    expect(screen.getByAltText("Art from the Web 1")).toBeInTheDocument();
    expect(screen.getByText("Art from the Web 1")).toBeInTheDocument();
    expect(screen.getByAltText("Art from the Web 2")).toBeInTheDocument();
    expect(screen.getByText("Art from the Web 2")).toBeInTheDocument();
  });

  it("renders missing art error message", () => {
    render(<ArtGallery data={[]} />);

    expect(screen.getByText("No art found.")).toBeInTheDocument();
  });
});
