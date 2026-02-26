import ytLogo from "../assets/images/tomapleicon.webp";

export default function Youtube() {
  return (
    <section className="youtubeSection">
      
        {/* TOP LEFT OVERLAY */}
        {/* <div className="ytOverlay">
          <img src={ytLogo} alt="Tomaple" />
          <span>TOMAPLE DONUTS’ VARIANTS</span>
        </div> */}

        {/* VIDEO */}
        <div className="youtubeVideoWrap">
           <iframe
              src="https://www.youtube.com/embed/i9yqsZ7Q8nA"
              title="Tomaple Donuts Variants"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </div>
    </section>
  );
}
