import { useEffect, useState } from "react";

function CharacterImage({ name }) {
  const [imgUrl, setImgUrl] = useState(null);
  useEffect(() => {
    let ignore = false;
    if (!ignore && imgUrl === null) {
      (async () => {
        try {
          const response = await fetch(
            `https://arcane.fandom.com/api.php?action=query&titles=${name}%2FGallery&list=allimages&aiprefix=${name}%5FIcon&aiprop=url|size&format=json&origin=*`,
          );
          const result = await response.json();
          const url = result.query.allimages[0].url;

          setImgUrl(url);
        } catch (error) {
          console.error(error);
        }
      })();
    }
    return () => {
      ignore = true;
    };
  }, []);

  return <img className="character-img" src={imgUrl} />;
}

export { CharacterImage };
