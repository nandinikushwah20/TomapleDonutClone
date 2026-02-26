import { useParams } from "react-router-dom";

export default function NewsDetail() {
  const { slug } = useParams();

  return (
    <div className="newsDetailPage">
      <div className="newsDetailContainer">

        {/* LEFT CONTENT */}
        <div className="newsContent">
          <img
            src="/images/March26.webp"
            alt="News"
            className="newsBanner"
          />

          <div className="newsMeta">
            <span>📅 March 26, 2022</span>
            <span>By Admin</span>
            <span>Tomaple News</span>
          </div>

          <h1>
            Yuk Cicipi Rajanya Donat Kentang saat Berbuka Puasa
          </h1>

          <p>
            Jakarta: Menjelang datangnya Bulan Suci Ramadan, sejumlah persiapan pun dilakukan oleh umat muslim. Salah satunya merencanakan makanan, minuman dan camilan berbuka puasa. 
          </p>
          
          <p>
            Waktu berpuasa memang adalah momentum penting untuk umat muslim, dan dianjurkan untuk mengonsumsi makanan yang manis saat berbuka. Karena itu, varian makanan dan minuman manis jadi incaran saat Bulan Suci Ramadan tiba.
          </p>

          <p>
            Agar tak membosankan, pemilihan takjil juga harus bervariasi. Salah satu takjil yang perlu dimasukkan ke daftar saat berbuka puasa kamu yaitu Donat kentang.
          </p>

          <p>
            Selama Bulan Ramadan, Tomaple Gourmet Potato Donuts menyediakan hampers untuk dibagikan ke orang tercinta. “Tagline kami itu #pinkboxhappiness,” kata Owner Tomaple Gourmet Potato Donuts, Lala Ursala, Jumat, 5 Maret 2022.
          </p>

          <p>
            Tomaple Gourmet Potato Donuts, pun bisa menjadi salah satu alternatif lokasi berbuka puasa. Yaitu di  Radio Dalam, Wisma 46 Sudirman, Plaza indonesia, Green Pramuka Square RDTX Kuningan, at Commune, Food Hall Grand Indonesia.
          </p>

          <p>
            “Tomaple Gourmet Potato Donuts atau yang kenal sebagai raja kentang donat memberikan pilihan donat kentang yang memiliki varian rasa manis dan asin. Walaupun ada donat dengan rasa premium, Tomaple tidak melupakan rasa klasik seperti meses, keju, dan gula. Sementara minumannya, kafe ini menyediakan dua kategori; coffee dan non-coffee,” ucapnya.
          </p>

          <p>
            Sementara, varian donat premium: Nutella Bomb, Floss Mayo, dan Ovo Crunch. Nutella Bomb adalah donat yang ditaburi cinnamon sugar dan berisi krim Nutella yang meleleh. Sedangkan, Ovo Crunch adalah donat kentang yang diolesi selai Ovomaltine. Sementara Floss Mayo  merupakan donat isi abon.
          </p>

          <p>
            Donat dengan olesan Ovomaltine dan abon. Tetapi untuk Nutella, donatnya sangat chewy dan isian Nutella-nya banyak. Donat dengan ukuran sedang ini tidak terlalu tipis maupun keras, sehingga mudah sekali menghabiskan donat tersebut dalam satu waktu.
          </p>

          <p>
            Buat kamu yang datang sendirian atau bersama teman, Tomaple memiliki ruang yang cukup untuk itu. Tempat ini memiliki bagian indoor atau outdoor. Hanya saja, tempatnya cukup tersembunyi di Wisma 46.
          </p>

          <p>
            “Untuk yang di luar Jakarta jangan sedih ya Tomaple Donat siap kirim ke luar kota, Soal harga, tenang saja. Akan ada harga khusus yang cukup terjangkau,” tutupnya.
            (YDH)
          </p>

          <p>
            Tomaple Gourmet Potato Donuts menyediakan berbagai varian donat
            kentang premium...
          </p>

          <p>
            Source :
            <a
              href="https://m.medcom.id/gaya/kuliner/ybDXyLqb-yuk-cicipi-rajanya-donat-kentang-saat-berbuka-puasa"
              target="_blank"
              rel="noreferrer"
            >
              Medcom.id
            </a>
          </p>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="newsSidebar">
          <h3>Recent Posts</h3>
          <ul>
            <li>Sambut Ramadhan, Rajanya Donat Kentang</li>
            <li>Kreasi Tomaple Donuts di Masa Pandemi</li>
            <li>10 Donat di Jakarta Kekinian</li>
          </ul>
        </aside>

      </div>
    </div>
  );
}
