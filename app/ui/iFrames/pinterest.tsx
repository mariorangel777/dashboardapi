import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Pinterest (){
  return (
    <div className="flex w-full h-full flex-col md:col-span-4 bg-black rounded-xl">
                <div className="flex items-center pb-2 pt-6 justify-center ">
                <ArrowPathIcon className="h-5 w-5 text-white" />
                <h2 className={`${lusitana.className}  text-xl text-white md:text-2xl `}> {/*se borra el mb-4 */}
                  Pinterest Embed
                </h2>
                </div>
                <div className="flex flex-col grow justify-between rounded-xl bg-black p-4 h-full">
                  <div className="bg-black h-full"> {/*se borra el padding X y metemos h-full y bg-black */}
                  <iframe className="w-full h-full" src="https://assets.pinterest.com/ext/embed.html?id=13370130138129507" ></iframe>
                  </div> {/*se añade className, w-full, h-full */}
                  <div className="flex items-center pb-2 pt-6 h-auto">
                    <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
                  </div>
                </div>
              </div>
  );
}