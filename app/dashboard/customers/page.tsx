import { lusitana } from "@/app/ui/fonts";
import Youtube from "@/app/ui/iFrames/youtube";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
export default function Page() {


    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          APIs
        </h1>


        <div className="grid grid-cols-6 grid-rows-16 gap-4">
    <div className="col-span-6 row-span-8"><Youtube/></div>
    <div className="col-span-2 row-span-8 row-start-9">
    <div className="flex w-full flex-col md:col-span-4 bg-black rounded-xl">
      <div className="flex items-center pb-2 pt-6 justify-center">
      <ArrowPathIcon className="h-5 w-5 text-white" />
      <h2 className={`${lusitana.className}  text-xl text-white md:text-2xl `}> {/*se borra el mb-4 */}
        Pinterest Embed
      </h2>
      </div>
      <div className="flex flex-col grow justify-between rounded-xl bg-black p-4">
         <div className="bg-white"> {/*se borra el padding X */}
         <iframe src="https://assets.pinterest.com/ext/embed.html?id=12033123999252134" height="620" width="100%" frameBorder="0" scrolling="no" ></iframe>
        </div> {/*se añade className y w-full */}
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
    </div>
    <div className="col-span-2 row-span-4 col-start-3 row-start-9">3</div>
    <div className="col-span-2 row-span-4 col-start-5 row-start-9">4</div>
    <div className="col-span-2 row-span-4 col-start-3 row-start-13">5</div>
    <div className="col-span-2 row-span-4 col-start-5 row-start-13">6</div>
</div>
    
    
        
        

        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F3DJuegosLATAM%2Fposts%2Fpfbid02HZy68PXyj1wjQ12FfwDVsWdB7dHh8KgvaiG7KawRtQpTfaCkPhiSLhPrcA834Jofl&show_text=false&width=500" width="500" height="498"  scrolling="no" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <script src="https://linangdata.com/calculatorEmbed/linangcalc.js"></script>
                <div >
                  <iframe id="linangcalc" src="https://linangdata.com/calculatorEmbed/embeddable.html?placement=right" 
                      width="50" height="50" scrolling="auto" frameBorder="0" 
                      >
                  </iframe>
                </div>
                <iframe src="https://www.slideshare.net/slideshow/embed_code/key/mOgNcEvXYaZxsv?startSlide=1" width="597" height="486" frameBorder="0"   scrolling="no"  allowFullScreen></iframe> <div ><strong> <a href="https://es.slideshare.net/slideshow/generacion-de-noticias-con-ia-en-tiempo-real/269700991" title="Generación de noticias con IA en tiempo real" target="_blank">Generación de noticias con IA en tiempo real</a> </strong> from <strong> <a href="https://es.slideshare.net/NatzirTurrado" target="_blank">Natzir Turrado</a> </strong></div>


        </main>
    );
  }