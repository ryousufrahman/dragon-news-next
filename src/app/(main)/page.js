import Image from "next/image";

export default function Home() {
  return (
    <>
     <div className=" container mx-auto grid grid-cols-12 gap-4 mt-4">
       <div className=" bg-green-300 col-span-3">
        left side
       </div>
       <div className="bg-red-300 col-span-6">
        middle
       </div>
       <div className="bg-blue-300 col-span-3">
        right
       </div>
       
     </div>
    
    
    </>
  );
}
