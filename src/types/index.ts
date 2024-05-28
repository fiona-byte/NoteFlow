import React from "react";

export type NavigationLinksProps = {
  path: string;
  Icon: React.FC< {className?: string}>;
};

export type EmptyPageProps = {
  pageHeading: string;
  pageSubTitle: string;
  PageIllustration: React.FC<{ className?: string }>;
};