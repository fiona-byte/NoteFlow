import TipTap from "@/components/Editor/TipTap";
import { Input } from "@/components/ui/input";

const CreateNote = () => {
  return (
    <div>
      <Input
        className="text-3xl font-medium mb-4 border-none px-0 focus-visible:ring-main placeholder:text-textColor lg:text-4xl lg:mb-5"
        placeholder="Title"
      />
      <TipTap />
    </div>
  );
};

export default CreateNote;
