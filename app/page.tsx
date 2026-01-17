"use client"

import { useState } from "react";
import { ProfileImage } from "./components/profile-image.component";

export default function Home() {
  const [edit, setEdit] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#141414] flex items-center justify-center">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black/60 via-black/20 to-transparent" />

      <div className="flex flex-col items-center gap-12">
        <h1 className="text-6xl font-medium text-white text-center">
          Choose a profile
        </h1>

        <div className="flex justify-center gap-5 flex-wrap max-w-5xl">
          <ProfileImage
            name="Richard"
            image="/images/richard.jpg"
            edit={edit}
          />
          <ProfileImage name="August" image="/images/august.jpg" edit={edit} />
          <ProfileImage
            name="Leonard"
            image="/images/leonard.jpg"
            edit={edit}
          />
          <ProfileImage name="Peter" image="/images/peter.jpg" edit={edit} />
        </div>
        <button
          onClick={() => setEdit(!edit)}
          className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
        >{edit ? "Done" : "Manage Profiles"}</button>
      </div>
    </div>
  );
}
