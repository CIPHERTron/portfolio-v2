type PSOgImageOptions = Partial<{
  theme: string;
  fontSize: string;
  images: string;
}>;

export const PSOgImage = (text: string, options?: PSOgImageOptions) => {
  const defaultOptions: PSOgImageOptions = {
    theme: "dark",
    fontSize: "100px",
    images:
      "https://res.cloudinary.com/pritish007/image/upload/v1644348821/Personal%20Portfolio/Favicon_nckr8a.png",
  };

  const finalOptions: PSOgImageOptions = {
    ...defaultOptions,
    ...options,
  };

  return `https://og-image.pritishsamal.tech/**${text}**.png?theme=${finalOptions.theme}&md=1&fontSize=${finalOptions.fontSize}&images=${finalOptions.images}`;
};
