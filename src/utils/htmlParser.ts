import parse from "html-react-parser";
import DOMPurify from "dompurify";

export const htmlParser = (htmlString: string) => {
  const cleanHtmlString = DOMPurify.sanitize(htmlString, {
    USE_PROFILES: { html: true },
  });
  const content = parse(cleanHtmlString);
  return content;
};
