"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { CiSearch } from "react-icons/ci";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  console.log(register);
  return (
    <form
      className="max-w-xl mx-auto space-y-3"
      onSubmit={handleSubmit(async (data) => {
        const response = await axios.post("/api/issues", data);
        console.log("response", response.data);
        alert(response.statusText);
        console.log("response", response.statusText);
        router.push("/issues");
      })}
    >
      <h1>New Issue Page</h1>
      <TextField.Root>
        <TextField.Slot>
          <CiSearch height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
