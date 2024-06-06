"use client";
import Image from "next/image";
import Fox from './assets/fox.gif';
import Skeleton from './assets/skeleton.gif';

const links:{label: string, url:string}[] = [
  {
    label: "instagram",
    url: "https://instagram.com/anibunny"
  },
  {
    label: "facebook",
    url: "https://facebook.com/anibunny"
  },
  {
    label: "tiktok",
    url: "https://tiktok.com/prettyfamouspopstar"
  },
  {
    label: "Keikkakalenteri",
    url: "https://www.team.fi/artist/ani/"
  }
];

export default function Home() {
  const numberOfSkeletons = Math.floor(Math.random() * 99);
  const numberOfFoxes = Math.floor(Math.random() * 99);
  const getFoxes = (limit:number) => {
    let foxes = [];
    for (let i = 0; i < limit; i++) {
      foxes.push(<Image style={{display: 'inline-block'}} src={Fox} alt="Fox" width="100" height="100" />)
    }
    return foxes;
  }

  const getSkeletons = (limit:number) => {
    let skeletons = [];
    for (let i = 0; i < limit; i++) {
      skeletons.push(<Image style={{display: 'inline-block'}} src={Skeleton} alt="Skeleton" width="100" height="100" />)
    }
    return skeletons;
  }

  return (
    <main>
      <h1>
        ANIN KOTISIVUT
      </h1>
      <div>
        {getFoxes(numberOfFoxes)}
      </div>
      <div>
        <h2>
          LINKIT
        </h2>
        <div>
          {links.map(({label, url}) => (
            <a href={url} key={label}> {label} </a>
          ))}
        </div>
      </div>
      <div>
        {getSkeletons(numberOfSkeletons)}
      </div>
    </main>
  );
}
