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
const contentArg = getArg("--content");
const content = (contentArg || process.env.POST_CONTENT || "").replace(/`/g, "\\`");
const author = getArg("--author", "Jessica Muñoz");

const filePath = path.resolve("src/data/blog.ts");

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
