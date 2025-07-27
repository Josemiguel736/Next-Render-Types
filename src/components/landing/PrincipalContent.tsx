export const PrincipalContent = () => {
  return (
    <div className="bg-[#17494b]">
      <main className="flex justify-between items-center max-w-4xl mx-auto text-amber-50 py-20 gap-20">
        <div className="w-1/2 font-bold">
          <h2 className="text-7xl leading-[1.4]"><span className="text-[#cc9fb6]">Champions</span>
           <br /> 
           <span className="text-[#fed6aa]">of </span>
           <span className="text-[#00a655] border-b-4 border-amber-50">costumer </span>
          <span className="text-[#31aabd] border-b-4 border-amber-50">service</span> </h2>
        </div>

        <div className="w-1/2">
          <div >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              soluta eius architecto nisi ab maiores, quo esse similique iste,
              dolorem animi natus dolorum, suscipit quae veritatis assumenda
              atque quasi consequuntur.
            </p>
          </div>
          <div className="flex mt-5 gap-10 ">
            <button className="bg-[#e4f0d3] p-3 text-[#17494b] font-semibold px-3">Free Trial</button>
            <button className="border-2 border-amber-50 p-3">View Demo</button>
          </div>
        </div>
      </main>
    </div>
  );
};
