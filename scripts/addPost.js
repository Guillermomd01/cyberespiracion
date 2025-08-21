// scripts/addPost.js
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);

function getArg(flag, defaultValue = "") {
  const index = args.indexOf(flag);
  return index !== -1 ? args[index + 1] : defaultValue;
}

const slug = getArg("--slug");
const title = getArg("--title");
const excerpt = getArg("--excerpt", "Nuevo post de respiración consciente");
const ogImage = getArg("--ogImage", "https://via.placeholder.com/600x400");
const author = getArg("--author", "Jessica Muñoz");

// Mejorar la lectura del contenido
let content = "";
const contentFile = getArg("--post-content"); // Variable corregida
const contentArg = getArg("--content");

if (contentFile && fs.existsSync(contentFile)) {
  // Leer desde archivo (método más seguro para contenido largo)
  content = fs.readFileSync(contentFile, "utf8").trim();
} else if (contentArg) {
  // Leer desde argumento
  content = contentArg;
} else if (process.env.POST_CONTENT) {
  // Leer desde variable de entorno
  content = process.env.POST_CONTENT;
}

// Escapar backticks y caracteres especiales
content = content.replace(/`/g, "\\`").replace(/\$/g, "\\$");
const filePath = path.resolve("src/data/blog.ts");

// === Validaciones ===
if (!slug || !title || !content) {
  console.error("❌ Error: faltan parámetros obligatorios");
  console.error("Uso: node addPost.js --slug SLUG --title TITLE --content CONTENT");
  process.exit(1);
}

// === Leer el archivo actual ===
let fileContent = fs.readFileSync(filePath, "utf8");

const today = new Date().toISOString().split("T")[0];

const newPost = `  {
    id: ${Date.now()},
    slug: '${slug}',
    title: '${title}',
    excerpt: '${excerpt}',
    date: '${today}',
    updatedAt: '${today}',
    author: '${author}',
    ogImage: '${ogImage}',
    content: \`${content}\`,
  },`;

const marker = "export const blogPosts: BlogPost[] = [";
if (!fileContent.includes(marker)) {
  throw new Error("No se encontró el array blogPosts en blog.ts");
}

fileContent = fileContent.replace(
  marker,
  `${marker}\n${newPost}`
);

fs.writeFileSync(filePath, fileContent, "utf8");

console.log("✅ Nuevo post insertado:", slug);
console.log("📝 Contenido agregado:", content.length, "caracteres");