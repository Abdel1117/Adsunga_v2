import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import "./AjoutArticle.css";
import { Loader } from "../../../components/Loader/Loader";

export const AjoutArticle = () => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");
  // Initialize CKEditor with cloud services

  const cloud = useCKEditorCloud({ version: "45.1.0", translations: ["fr"] });
  const LICENSE_KEY = import.meta.env.VITE_TOKEN_CKEDITOR;
  /*   const handleValidationOfSending = (): boolean => {
    console.log("confirmation");
    const confirm: boolean = window.confirm(
      "Êtes-vous sûr de vouloir envoyer cet article ? Assurez-vous que tout est correct avant de continuer."
    );
    return confirm;
  }; */

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("No file selected");
      return;
    }
    const file = e.target.files[0];
    if (file) {
      setImage(() => {
        return file;
      });
    }
  };

  const handleAddArticle = async () => {
    /*     let isHandle = handleValidationOfSending();
     */ /*  console.log("isHandle", isHandle);
    if (!isHandle) {
      return;
    } */
    const editor = editorRef.current;
    console.log("editor", editor);
    if (!editor) {
      console.error("Editor is not initialized");
      return;
    }
    const data = editor.getData();
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", data);
      if (image) {
        formData.append("image", image);
      }

      const response = await fetch(`${API_URL}/api/articles/createArticle`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add article");
      }

      const result = await response.json();
      console.log("Article added successfully:", result);
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };
  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);
  const { ClassicEditor, editorConfig } = useMemo(() => {
    if (cloud.status !== "success" || !isLayoutReady) {
      return {};
    }
    const {
      ClassicEditor,
      AutoImage,
      AutoLink,
      Autosave,
      BalloonToolbar,
      Base64UploadAdapter,
      BlockQuote,
      Bold,
      Bookmark,
      Code,
      CodeBlock,
      Essentials,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      Heading,
      Highlight,
      HorizontalLine,
      HtmlEmbed,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      Paragraph,
      RemoveFormat,
      Strikethrough,
      Subscript,
      Superscript,
      Table,
      TableCellProperties,
      TableProperties,
      TableToolbar,
      TodoList,
      Underline,
    } = cloud.CKEditor;

    return {
      ClassicEditor,
      editorConfig: {
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "link",
            "insertImage",
            "insertTable",
            "highlight",
            "blockQuote",
            "codeBlock",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "outdent",
            "indent",
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          AutoImage,
          AutoLink,
          Autosave,
          BalloonToolbar,
          Base64UploadAdapter,
          BlockQuote,
          Bold,
          Bookmark,
          Code,
          CodeBlock,
          Essentials,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          Heading,
          Highlight,
          HorizontalLine,
          HtmlEmbed,
          ImageBlock,
          ImageCaption,
          ImageInline,
          ImageInsert,
          ImageInsertViaUrl,
          ImageResize,
          ImageStyle,
          ImageTextAlternative,
          ImageToolbar,
          ImageUpload,
          Indent,
          IndentBlock,
          Italic,
          Link,
          LinkImage,
          List,
          ListProperties,
          Paragraph,
          RemoveFormat,
          Strikethrough,
          Subscript,
          Superscript,
          Table,
          TableCellProperties,
          TableProperties,
          TableToolbar,
          TodoList,
          Underline,
        ],
        balloonToolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "insertImage",
          "|",
          "bulletedList",
          "numberedList",
        ],
        fontFamily: {
          supportAllValues: true,
        },
        fontSize: {
          options: [10, 12, 14, "default", 18, 20, 22, 24, 26, 28, 36],
          supportAllValues: true,
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        image: {
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
            "imageStyle:inline",
            "imageStyle:wrapText",
            "imageStyle:breakText",
            "|",
            "resizeImage",
          ],
        },
        initialData:
          "Bienvenue sur Adsunga, la plateforme de gestion de projets et de collaboration en ligne. Commencez à rédiger votre article ici !",
        language: "fr",
        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true,
          },
        },
        menuBar: {
          isVisible: true,
        },
        placeholder: "Type or paste your content here!",
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
      },
    };
  }, [cloud, isLayoutReady]);

  return (
    <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto   min-h-screen p-5">
      <div ref={editorRef}>
        {isLayoutReady ? (
          <>
            <div className="mb-4">
              <label htmlFor="title" className="text-2xl font-bold mb-6  ">
                Titre de l'article
              </label>
              <input
                id="title"
                type="text"
                placeholder="Titre de l'article"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mt-5  bg-primary p-2 rounded-lg my-4">
              <label
                className="dark:text-white mr-2 text-sm md:text-base"
                htmlFor={`Image`}
              >
                Image de présentation de l'article
              </label>
              <input
                className="text-white text-sm md:text-base"
                type="file"
                name={`Image`}
                id={`Image`}
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
            {ClassicEditor && editorConfig && (
              <CKEditor
                editor={ClassicEditor}
                config={editorConfig}
                onReady={(editor) => {
                  editorRef.current = editor;
                  console.log("Editor is ready", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data);
                }}
              />
            )}
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors hover:cursor-pointer"
              onClick={() => {
                handleAddArticle();
              }}
            >
              Rajouter Article
            </button>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};
