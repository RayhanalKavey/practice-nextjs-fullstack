"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { CiSearch } from "react-icons/ci";
const NewIssuePage = () => {
  return (
    <div className="max-w-xl mx-auto space-y-3">
      <h1>New Issue Page</h1>
      <TextField.Root>
        <TextField.Slot>
          <CiSearch height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
