import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Youtube (){
  return (
    <div className="flex w-full flex-col md:col-span-4 bg-black rounded-xl">
      <div className="flex items-center pb-2 pt-6 justify-center">
      <ArrowPathIcon className="h-5 w-5 text-white" />
      <h2 className={`${lusitana.className}  text-xl text-white md:text-2xl `}> {/*se borra el mb-4 */}
        Youtube Embed
      </h2>
      </div>
      <div className="flex flex-col grow justify-between rounded-xl bg-black p-4">
         <div className="bg-white"> {/*se borra el padding X */}
         <iframe className="w-full h-560"  src="https://www.youtube.com/embed/CFGLoQIhmow?si=_wZjv9XVruwGHT-R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div> {/*se añade className y w-full */}
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
