import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import "./AjoutArticle.css";
import { Loader } from "../../../components/Loader/Loader";
import { toast } from "react-toastify";

export const AjoutArticle = () => {
  const navigate = useNavigate();
  const category: {
    id: number;
    name: string;
  }[] = [
    { id: 1, name: "Technologie" },
    { id: 2, name: "Sécurité" },
    { id: 3, name: "Maintenance" },
    { id: 4, name: "Drone" },
  ];
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");
  const [categorySelected, setCategorySelected] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [titleError, setTitleError] = useState<string>("");
  const [categoryError, setCategoryError] = useState<string>("");
  const [imageError, setImageError] = useState<string>("");
  const [errorContent, setErrorContent] = useState<string>("");

  // Initialize CKEditor with cloud services

  const cloud = useCKEditorCloud({ version: "45.1.0", translations: ["fr"] });
  const LICENSE_KEY = import.meta.env.VITE_TOKEN_CKEDITOR;
  // Function to handle category change
  const handleCategoryChange = (category: string) => {
    setCategorySelected(category);
    console.log("Selected category:", category);
  };
  /* ================================== */
  // Function to handle image change
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
  /* ================================== */

  /* Function for the regex of article content */
  const regexTitle = (title: string): boolean => {
    const regex = /^[a-zA-Z0-9\s.,!?'"()\-:;]+$/;
    return regex.test(title);
  };
  /* ================================== */

  /* Function for the regex of article content */
  const regexContent = (content: string): boolean => {
    return content.trim().length > 0;
  };
  /* ================================== */

  // Function to validate the article before sending
  const validateArticle = (): boolean => {
    let hastError = false;
    /* Reset of the error */
    setTitleError("");
    setImageError("");
    setErrorContent("");
    setCategoryError("");
    /* ====================================== */
    if (!title || !regexTitle(title)) {
      toast.error("Le titre de l'article est invalide. Veuillez le corriger.");
      setTitleError("Le titre de l'article est invalide. Veuillez le corriger");
      hastError = true;
    }
    if (!categorySelected) {
      toast.error(
        "La catégorie de l'article est invalide. Veuillez la corriger."
      );
      setCategoryError(
        "La catégorie de l'article est invalide. Veuillez la corriger"
      );
      hastError = true;
    }
    if (image === null) {
      toast.error("L'image de l'article est invalide. Veuillez la corriger.");
      setImageError("L'image de l'article est invalide. Veuillez la corriger");
      hastError = true;
    }
    if (!content || !regexContent(content)) {
      console.log(content);
      toast.error(
        "Le contenu de l'article est invalide. Veuillez le corriger."
      );
      setErrorContent(
        "Le contenu de l'article est invalide. Veuillez le corriger"
      );
      hastError = true;
    }
    if (hastError) {
      return false;
    } else {
      return true;
    }
  };
  /* ================================== */

  // Function to handle adding an article
  const handleAddArticle = async () => {
    const editor = editorRef.current;
    if (!editor) {
      console.error("Editor is not initialized");
      return;
    }
    const data = editor.getData();
    const API_URL = import.meta.env.VITE_API_URL;

    if (!validateArticle()) {
      return;
    }
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", data);
      formData.append("category", categorySelected);
      if (image) {
        formData.append("image", image);
      }

      const response = await fetch(`${API_URL}/articles/createArticle`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add article");
        toast.error("Échec de l'ajout de l'article");
      } else {
        toast.success("Article ajouté avec succès");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error adding article:", error);
      toast.error("Une erreur s'est produite lors de l'ajout de l'article");
    } finally {
      setIsLoading(false);
    }
  };
  /* ================================== */

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
  }, [cloud, isLayoutReady, LICENSE_KEY]);
  /* ================================== */

  return (
    <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto   min-h-screen p-5">
      <div ref={editorRef}>
        {isLayoutReady && !isLoading ? (
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
              {titleError && (
                <p className="text-red-500 text-sm">{titleError}</p>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="title" className="text-2xl font-bold mb-6  ">
                Categorie de l'article
              </label>
              <select
                id="category"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                onChange={(e) => {
                  handleCategoryChange(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Sélectionnez une catégorie
                </option>
                {category.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {categoryError && (
                <p className="text-red-500 text-sm">{categoryError}</p>
              )}
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
            {image && (
              <div className="mb-4">
                <img
                  src={
                    image instanceof File
                      ? URL.createObjectURL(image)
                      : `${API_URL}/uploads/${image}`
                  }
                  alt="Preview"
                  className="w-full h-auto rounded-lg mb-2"
                  loading="lazy"
                />
              </div>
            )}
            {imageError && (
              <p className="text-red-500 text-sm mb-4 ">{imageError}</p>
            )}
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
            {errorContent && (
              <p className="text-red-500 text-sm">{errorContent}</p>
            )}
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors hover:cursor-pointer"
              onClick={() => {
                handleAddArticle();
              }}
            >
              Rajouter Article
            </button>
            <button
              className="mt-4 ml-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors hover:cursor-pointer"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Retour au tableau de bord
            </button>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};
