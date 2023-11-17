'use client'

import { SetStateAction, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface EditorProps {
  size: number;
  id: string;
  initialValue?: string;
  state: (content: string) => void;
}

export default function TextEditor({ size, id, initialValue = '', state }: EditorProps) {
  const handleEditorChange = (content: string, editor: any) => {
    state(content);
  };


  return (
    <Editor
      id={id}
      apiKey="8xrw93gjm9l258jfni5bc6f7az32rwkm6xdmqhaz7d95p7xv"
      init={{
        height: size,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help'
      }}
      initialValue={initialValue}
      onEditorChange={handleEditorChange}
    />
  )
}