import { lusitana } from "@/app/ui/fonts";
import Youtube from "@/app/ui/iFrames/youtube";
import Pinterest from "@/app/ui/iFrames/pinterest";
import Calculator from "@/app/ui/iFrames/calculator";
import Slideshare from "@/app/ui/iFrames/slideshare";
import Facebook from "@/app/ui/iFrames/facebook";
export default function Page() {


    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          APIs
        </h1>


        <div className="grid grid-cols-6 grid-rows-16 gap-4">
          <div className="col-span-6 row-span-8"><Youtube/></div>
          <div className="col-span-2 row-span-8 row-start-9 "><Pinterest/></div>
          <div className="col-span-2 row-span-4 col-start-3 row-start-9"><Facebook/>          </div>
          <div className="col-span-2 row-span-4 col-start-5 row-start-9 "><Calculator/></div>
          <div className="col-span-2 row-span-4 col-start-3 row-start-13 bg-gray-500">   aqui Va un Iframe Chido       </div>
          <div className="col-span-2 row-span-4 col-start-5 row-start-13">   <Slideshare/>         </div>
        </div>
    
    
        
        

        


        </main>
    );
  }