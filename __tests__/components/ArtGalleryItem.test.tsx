import { render, screen } from "@testing-library/react";
import ArtGalleryItem from "components/ArtGallery/ArtGalleryItem";
import "@testing-library/jest-dom";

const ART_DATA = {
  artist: "John Doe",
  title: "Art from the Web",
  created_at: "2022",
  medium: "Digital",
  description: "This is the description for Art from the Web",
  image_url: "/images/art/lowboy_1943.8.7876.jpg",
};

describe("ArtGalleryItem", () => {
  it("renders correct data", () => {
    render(<ArtGalleryItem data={ART_DATA} />);

    expect(screen.getByAltText(ART_DATA.title)).toBeInTheDocument();
    expect(screen.getByText(ART_DATA.title)).toBeInTheDocument();
    expect(screen.getByText(ART_DATA.medium)).toBeInTheDocument();
    expect(screen.getByText(ART_DATA.description)).toBeInTheDocument();
    expect(
      screen.getByText(`${ART_DATA.artist}, ${ART_DATA.created_at}`)
    ).toBeInTheDocument();
  });
});
