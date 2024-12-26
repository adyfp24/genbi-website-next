// import React, { useEffect, useRef } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// interface CKeditorProps {
//   onChange: (data: string) => void;
//   editorLoaded: boolean;
//   name: string;
//   value: string;
//   className?: string;  // Make className optional
// }

// interface UploadResponse {
//   uploaded: boolean;
//   url: string;
//   error?: {
//     message: string;
//   };
// }

// class UploadAdapter {
//   private loader;
  
//   constructor(loader: any) {
//     this.loader = loader;
//   }

//   upload(): Promise<{ default: string }> {
//     return this.loader.file.then(
//       (file: File) =>
//         new Promise((resolve, reject) => {
//           const formData = new FormData();
//           formData.append("file", file);

//           fetch("/api/upload", {
//             method: "POST",
//             body: formData,
//           })
//             .then(async (response) => {
//               if (!response.ok) {
//                 const errorData = await response.json().catch(() => null);
//                 throw new Error(`HTTP error! status: ${response.status}`);
//               }
//               return response.json() as Promise<UploadResponse>;
//             })
//             .then((response) => {
//               if (response.error) {
//                 throw new Error(response.error.message || 'Upload failed');
//               }
              
//               if (!response.url) {
//                 throw new Error('No URL in response');
//               }

//               // Store URLs as absolute paths
//               const baseUrl = window.location.origin;
//               const imageUrl = response.url.startsWith('http') 
//                 ? response.url 
//                 : `${baseUrl}${response.url}`;

//               resolve({
//                 default: imageUrl
//               });
//             })
//             .catch((error) => {
//               console.error('Upload error:', error);
//               reject(error.message || 'Upload failed');
//             });
//         })
//     );
//   }

//   abort(): void {
//     console.log('Upload aborted');
//   }
// }

// export const CKeditorComponent: React.FC<CKeditorProps> = ({
//   onChange,
//   editorLoaded,
//   name,
//   value,
//   className
// }) => {
//   function uploadPlugin(editor: any) {
//     editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
//       return new UploadAdapter(loader);
//     };
//   }

//   const processImageUrls = (content: string): string => {
//     return content.replace(
//       /<img[^>]+src="([^"]+)"/g,
//       (match: string, url: string) => {
//         const baseUrl = window.location.origin;
//         const absoluteUrl = url.startsWith('http') 
//           ? url 
//           : `${baseUrl}${url}`;
//         return match.replace(url, absoluteUrl);
//       }
//     );
//   };

//   return (
//     <>
//       {editorLoaded ? (
//         <CKEditor
//           editor={ClassicEditor}
//           data={value}
//           onChange={(_event: any, editor: any) => {
//             const data = editor.getData();
//             const processedData = processImageUrls(data);
//             onChange(processedData);
//           }}
//           config={{
//             extraPlugins: [uploadPlugin],
//             toolbar: {
//               items: [
//                 "heading",
//                 "|",
//                 "bold",
//                 "italic",
//                 "link",
//                 "bulletedList",
//                 "numberedList",
//                 "|",
//                 "outdent",
//                 "indent",
//                 "|",
//                 "imageUpload",
//                 "blockQuote",
//                 "insertTable",
//                 "mediaEmbed",
//                 "undo",
//                 "redo",
//               ],
//             },
//             language: "en",
//           }}
//         />
//       ) : (
//         <div>Editor loading</div>
//       )}
//     </>
//   );
// };

// // Named export
// export { CKeditorComponent as CKeditor };
// // Default export
// export default CKeditorComponent;