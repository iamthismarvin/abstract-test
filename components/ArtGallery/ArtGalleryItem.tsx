import Image from "next/image";
import { IArt } from "utils/types";

const ArtItem: React.FC<{ data: IArt }> = ({ data }) => {
  return (
    <div className="bg-slate-50 drop-shadow-md rounded-xl">
      <div className="h-72 relative">
        {/* Show image modal with large image at click. */}
        <Image
          src={data.image_url}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-2xl">{data.title}</h3>
        <h4 className="font-bold italic">
          {data.artist}, {data.created_at}
        </h4>
        <p className="mb-4 text-sm text-gray-500">{data.medium}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ArtItem;
