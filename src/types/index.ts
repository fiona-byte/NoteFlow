export type SidebarLinksProps = {
  path: string;
  Icon: React.FC<{className?: string}>;
};

export type NotesProps = {
  id: number;
  dateCreated: string;
  noteTitle: string;
  noteContent: string;
  totalTags: number;
  tags: string[];
  favourite: boolean;
};

export type EmptyPageProps = {
  pageHeading: string;
  pageSubTitle: string;
  PageIllustration: React.FC<{ className?: string }>;
};