import { EditorContent, useEditor } from "@tiptap/react";
import { List, ListOrdered } from "lucide-react";
import { NotesProps } from "@/types";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@/assets/svgs/bold";
import Italic from "@/assets/svgs/italic";
import Strikethrough from "@/assets/svgs/strikethrough";
import Undo from "@/assets/svgs/undo";
import Redo from "@/assets/svgs/redo";
import "./TipTap.css";

type EditorProps = {
  note: NotesProps;
  handleEditNote: (noteTitle: string, noteContent: string) => void;
};

const TipTap = ({ note, handleEditNote }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something…",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose list-inside dark:prose-invert prose-sm text-lg sm:prose-base lg:prose-lg xl:prose-2xl my-4 focus:outline-none",
      },
    },
    content: note.noteContent || "",
    onUpdate: ({ editor }) => {
      const html = editor?.getHTML();
      handleEditNote(note.noteTitle, html);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="py-1 flex gap-1.5 mb-4">
        <button
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "is-active bg-tertiary px-2 py-1 rounded-[6px]"
              : "pr-2 py-1"
          }
        >
          <Bold />
        </button>
        <button
          title="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "is-active bg-tertiary px-2 py-1 rounded-[6px]"
              : "px-2 py-1"
          }
        >
          <Italic />
        </button>
        <button
          title="Strikethrough"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike")
              ? "is-active bg-tertiary px-2 py-1 rounded-[6px]"
              : "px-2 py-1"
          }
        >
          <Strikethrough />
        </button>
        <button
          title="Bullet list"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? "is-active bg-tertiary px-2 py-1 rounded-[6px]"
              : "px-2 py-1"
          }
        >
          <List size="22" strokeWidth="1.5" />
        </button>
        <button
          title="Ordered list"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? "is-active bg-tertiary px-2 py-1 rounded-[6px]"
              : "px-2 py-1"
          }
        >
          <ListOrdered size="22" strokeWidth="1.5" />
        </button>
        <button
          title="Undo"
          className="px-2 py-1 cursor-pointer"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <Undo />
        </button>
        <button
          title="Redo"
          className="px-2.5 py-1 cursor-pointer"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <Redo />
        </button>
      </div>
      <EditorContent editor={editor} />
    </>
  );
};

export default TipTap;
