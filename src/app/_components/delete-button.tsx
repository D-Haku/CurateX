"use client";

import { Button } from "~/components/ui/button";
import { toast } from "sonner";

type Props = {
  onDelete: () => Promise<void>;
};

const DeleteButton = ({ onDelete }: Props) => {
  const handleClick = async () => {
    await toast.success("image deleted");
  };
  return (
    <Button onClick={handleClick} type="submit" variant="destructive">
      Delete
    </Button>
  );
};

export default DeleteButton;
