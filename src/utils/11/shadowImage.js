export const loadImage = function (file) {
  if (!file) {
    return null;
  }
  const objUrl = URL.createObjectURL(file);
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.onload = () => {
      console.log(objUrl);
      resolve(img);
    };
    img.onerror = () => {
      reject(null);
    };
    img.src = objUrl;
  });
};

const getCSSFragment = (width, height, bmp) => {
  const shadowCSSFragment = [];
  const shadowCSSHover = [];

  console.log(bmp);
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      const index = r * width + c;
      const R = bmp[index * 4],
        G = bmp[index * 4 + 1],
        B = bmp[index * 4 + 2],
        A = bmp[index * 4 + 3] / 255;
      shadowCSSFragment.push(`${c + 1}px ${r}px rgba(${R}, ${G}, ${B}, ${A})`);
      shadowCSSHover.push(
        `${c + 1}px ${r}px rgba(${255 - R}, ${255 - G}, ${255 - B}, ${A})`
      );
    }
  }

  return { shadowCSSFragment, shadowCSSHover }
};

export const generateImg = async (img) => {
  if (!img) {
    return;
  }

  const cvs = document.createElement("canvas");
  cvs.width = img.width;
  cvs.height = img.height;
  const ctx = cvs.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const bmp = ctx.getImageData(0, 0, img.width, img.height).data;
  console.log(bmp);
  const { shadowCSSFragment, shadowCSSHover } = getCSSFragment(img.width, img.height, bmp);
  return {
    width: img.width,
    height: img.height,
    shadowCSSFragment,
    shadowCSSHover
  }
}

