// export default function Instagram() {
//   const posts = [
//     {
//       id: "CqCk0tMA8XC",
//       link: "https://www.instagram.com/reel/CqCk0tMA8XC/",
//     },
//     {
//       id: "CqCWUhEgMJK",
//       link: "https://www.instagram.com/reel/CqCWUhEgMJK/",
//     },
//     {
//       id: "Cp_0uT_AJ4j",
//       link: "https://www.instagram.com/reel/Cp_0uT_AJ4j/",
//     },
//     {
//       id: "Cp_0UPwSNIC",
//       link: "https://www.instagram.com/reel/Cp_0UPwSNIC/",
//     },
//     {
//       id: "Cp6pdZuAQeR",
//       link: "https://www.instagram.com/reel/Cp6pdZuAQeR/",
//     },
//     {
//       id: "Cp4JkYoSLk8",
//       link: "https://www.instagram.com/p/Cp4JkYoSLk8/",
//     },
//     {
//       id: "Cp1qVXoysuQ",
//       link: "https://www.instagram.com/p/Cp1qVXoysuQ/",
//     },
//     {
//       id: "Cpy7tL_gP8-",
//       link: "https://www.instagram.com/reel/Cpy7tL_gP8-/",
//     },
//     {
//       id: "CpwWh1cypvF",
//       link: "https://www.instagram.com/p/CpwWh1cypvF/",
//     },
//     {
//       id: "CpwWZhcy3mk",
//       link: "https://www.instagram.com/p/CpwWZhcy3mk/",
//     },
//   ];

//   return (
//     <section className="instagramSection">
//       <h2>
//         Our <span>Instagram</span>
//       </h2>

//       <div className="instaGrid">
//         {posts.map((p, i) => (
//           <a
//             key={i}
//             href={p.link}
//             target="_blank"
//             rel="noreferrer"
//             className="instaItem"
//           >
//             <iframe
//               src={`https://www.instagram.com/reel/${p.id}/embed`}
//               title="Instagram Reel"
//               loading="lazy"
//             ></iframe>

//             {/* hover overlay */}
//             <div className="instaOverlay">
//               <span className="playIcon">▶</span>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Instagram() {
  const posts = [
    { id:"CqCk0tMA8XC", link:"https://www.instagram.com/reel/CqCk0tMA8XC/" },
    { id:"CqCWUhEgMJK", link:"https://www.instagram.com/reel/CqCWUhEgMJK/" },
    { id:"Cp_0uT_AJ4j", link:"https://www.instagram.com/reel/Cp_0uT_AJ4j/" },
    { id:"Cp_0UPwSNIC", link:"https://www.instagram.com/reel/Cp_0UPwSNIC/" },
    { id:"Cp6pdZuAQeR", link:"https://www.instagram.com/reel/Cp6pdZuAQeR/" },
    { id:"Cp4JkYoSLk8", link:"https://www.instagram.com/p/Cp4JkYoSLk8/" },
    { id:"Cp1qVXoysuQ", link:"https://www.instagram.com/p/Cp1qVXoysuQ/" },
    { id:"Cpy7tL_gP8-", link:"https://www.instagram.com/reel/Cpy7tL_gP8-/" },
    { id:"CpwWh1cypvF", link:"https://www.instagram.com/p/CpwWh1cypvF/" },
    { id:"CpwWZhcy3mk", link:"https://www.instagram.com/p/CpwWZhcy3mk/" },
  ];

  return (
    <section className="instagramSection">
      <h2>Our <span>Instagram</span></h2>

      <div className="instaGrid">
        {posts.map((p,i)=>(
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="instaItem"
          >
            <div className="instaFrameWrap">
              <iframe
                src={`${p.link}embed`}
                loading="lazy"
                title="Instagram"
              />
            </div>

            <div className="instaOverlay">
              <span className="playIcon">▶</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


