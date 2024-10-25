"use client";

import CKeditor from "@/components/layouts/ck-editor";
import React, { useEffect, useState } from "react";

const BlogAdmin: React.FC = () => {
    const [data, setData] = useState<string>("");
    const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return (
        <>
            <CKeditor
                editorLoaded={editorLoaded}
                name="content"
                onChange={(data: string) => setData(data)}
                value={data}
            />
         
            <div>
                <h2>Content Preview:</h2>
                <div dangerouslySetInnerHTML={{ __html: data }} />
            </div>
        </>
    );
};

export default BlogAdmin;
