import { pdfToChunks } from "./parsePdf.js";
import { ingestDocument } from "./ingest.js";
import { askRAG } from "./rag.js";

async function main() {
  // Ingest PDF
  // Ask question
  const answer = await askRAG("Where does Amazon generally invest its excess cash in?", "Amazon.pdf");
  console.log(answer);
}

main();
