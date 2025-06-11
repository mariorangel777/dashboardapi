import { lusitana } from "@/app/ui/fonts";
import Youtube from "@/app/ui/iFrames/youtube";
export default function Page() {


    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          APIs
        </h1>
        <div>
       <Youtube/>
        </div>
        
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=12033123999252134" height="789" width="345" frameBorder="0" scrolling="no" ></iframe>
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