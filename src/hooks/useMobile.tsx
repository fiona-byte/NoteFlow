import useScreenSize from "./useScreenSize";

export const useMobile = () => {
  const { width } = useScreenSize();

  return width < 767;
};
