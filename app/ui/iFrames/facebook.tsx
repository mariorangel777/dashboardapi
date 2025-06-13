import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Facebook (){
  return (
    <div className="flex w-full h-full flex-col md:col-span-4 bg-black rounded-xl">
                <div className="flex items-center pb-2 pt-6 justify-center">
                <ArrowPathIcon className="h-5 w-5 text-white" />
                <h2 className={`${lusitana.className}  text-xl text-white md:text-2xl `}> {/*se borra el mb-4 */}
                  Facebook Post
                </h2>
                </div>
                <div className="flex flex-col grow justify-between rounded-xl bg-black p-4 h-full">
                  <div className="bg-black h-full"> {/*se borra el padding X */}
                  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F3DJuegosLATAM%2Fposts%2Fpfbid02HZy68PXyj1wjQ12FfwDVsWdB7dHh8KgvaiG7KawRtQpTfaCkPhiSLhPrcA834Jofl&show_text=false&width=500" className="w-full h-full" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                  </div> {/*se añade className y w-full */}
                  <div className="flex items-center pb-2 pt-6">
                    <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
                  </div>
                </div>
              </div>
  );
}