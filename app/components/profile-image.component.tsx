import Image from "next/image";

type profile = {
  image: string;
  name: string;
  edit: boolean;
};

export function ProfileImage(props: profile) {
  return (
    <div className="group flex flex-col items-center transition-all duration-300">
      <div className="relative w-44 h-44 rounded-lg overflow-hidden bg-black group-hover:scale-105 transition-all duration-300 group-hover:shadow-amber-600 group-hover:shadow-lg">
        <Image
          className="object-cover"
          src={props.image}
          alt={props.name}
          fill
        />
        {props.edit && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300">
            <Image 
              className="object-cover" 
              src="/images/pencil.png" 
              alt="editing"
              width={60}
              height={60}
            />
          </div>
        )}
      </div>

      <span className="mt-3 text-2xl text-center transition-all duration-300 group-hover:scale-110">
        {props.name}
      </span>
    </div>
  );
}
