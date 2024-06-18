export type SidebarLinksProps = {
  path: string;
  Icon: React.FC<{ className?: string }>;
};

export type EmptyPageProps = {
  pageHeading: string;
  pageSubTitle: string;
  PageIllustration: React.FC<{ className?: string }>;
};

export type NotesProps = {
  id: number;
  dateCreated: Date;
  noteTitle: string;
  lastEdited: Date;
  noteContent: string;
  tags: number[];
  favourite: boolean;
};

export type CreateNoteState = NotesProps & {
  lastEdited: Date;
  saved: boolean;
};

export type TagProps = {
  tagId: number;
  tagName: string;
};
