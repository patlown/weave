import { writeFileSync } from "fs";

// Define the message
const message = { message: "Hello, World!" };

// Function to write JSON to a file
function generateJson(outputPath: string, data: object): void {
  const jsonData = JSON.stringify(data, null, 2);
  try {
    writeFileSync(outputPath, jsonData);
    console.log(`File has been generated at ${outputPath}`);
  } catch (error) {
    console.error("Failed to generate the JSON file:", error);
  }
}

// Generate JSON file with "Hello, World!"
generateJson("hello-world.json", message);
