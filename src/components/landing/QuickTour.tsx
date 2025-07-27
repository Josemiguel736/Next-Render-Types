import Image from "next/image";
import imageTour from "@/assets/landing/tour.jpg"

export const QuickTour = () => {
  return (
    <section className="bg-[#e4f0d3] text-[#03363e]">
      <div className="max-w-4xl mx-auto text-center py-10">
        <h3 className=" text-4xl font-bold mb-1.5">Take a quick tour</h3>
        <p className="text-sm max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur
          quasi autem qui eos libero, odit molestias ipsum! Iure ipsa quis odit?
        </p>
        <Image className="mx-auto my-8" src={imageTour} alt="Tour Image" width={500}/>
      </div>
    </section>
  );
};
