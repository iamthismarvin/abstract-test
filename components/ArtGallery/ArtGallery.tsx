import ArtItem from "./ArtGalleryItem";
import { IArt } from "utils/types";

const ArtGallery: React.FC<{ data: IArt[] }> = ({ data }) => {
  return (
    <section>
      <ul className="flex flex-col gap-4 md:grid md:grid-cols-2">
        {data.map((art) => (
          <ArtItem key={art.title} data={art} />
        ))}
      </ul>
    </section>
  );
};

export default ArtGallery;
