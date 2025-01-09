"use client";
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinyEditorProps {
  onChange: (content: string) => void;
  value: string;
  className?: string;
}

const TinyEditor: React.FC<TinyEditorProps> = ({ onChange, value, className }) => {
  return (
    <div className={className}>
      <Editor
        apiKey="qw5wesyq9za0svoladugt0567ahldllamh091way7d15bc4y"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          base_url: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.7.0', // Base URL for TinyMCE resources
          suffix: '.min',       // Use minified version
        }}
        value={value}
        onEditorChange={onChange}
      />
    </div>
  );
};

export default TinyEditor;