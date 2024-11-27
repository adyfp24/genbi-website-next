// components/layouts/ck-editor.tsx
import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  name: string;
  value: string;
  className: string;
}

interface UploadResponse {
  uploaded: boolean;
  url: string;
  error?: {
    message: string;
  };
}

class UploadAdapter {
  private loader;
  
  constructor(loader: any) {
    this.loader = loader;
  }

  upload(): Promise<{ default: string }> {
    return this.loader.file.then(
      (file: File) =>
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("file", file);

          console.log('Uploading file:', file.name, file.size);

          fetch("/api/upload", {
            method: "POST",
            body: formData,
          })
            .then(async (response) => {
              if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                console.error('Upload response error:', {
                  status: response.status,
                  statusText: response.statusText,
                  errorData
                });
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json() as Promise<UploadResponse>;
            })
            .then((response) => {
              console.log('Upload response:', response);
              
              if (response.error) {
                throw new Error(response.error.message || 'Upload failed');
              }
              
              if (!response.url) {
                throw new Error('No URL in response');
              }

              resolve({
                default: response.url
              });
            })
            .catch((error) => {
              console.error('Upload error:', error);
              reject(error.message || 'Upload failed');
            });
        })
    );
  }

  abort(): void {
    console.log('Upload aborted');
  }
}

const CKeditor: React.FC<CKeditorProps> = ({
  onChange,
  editorLoaded,
  name,
  value,
  className
}: CKeditorProps) => {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    ClassicEditor: typeof ClassicEditor;
  }>();

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
      return new UploadAdapter(loader);
    };
  }

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
          onError={(error: Error) => {
            console.error('CKEditor error:', error);
          }}
          config={{
            extraPlugins: [uploadPlugin],
            toolbar: {
              items: [
                "heading",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "|",
                "outdent",
                "indent",
                "|",
                "imageUpload",
                "blockQuote",
                "insertTable",
                "mediaEmbed",
                "undo",
                "redo",
              ],
            },
            language: "en",
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
};

export default CKeditor;