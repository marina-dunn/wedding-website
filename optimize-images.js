const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputFolder = path.join(__dirname, "images-to-process");
const outputFolder = path.join(__dirname, "public", "gallery");

// Ensure gallery folder exists
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

// Get existing highest photo number
const existingFiles = fs
    .readdirSync(outputFolder)
    .filter((file) => /^photo\d{2}\.webp$/i.test(file));
let maxIndex = 0;

existingFiles.forEach((file) => {
    const match = file.match(/^photo(\d{2})\.webp$/i);
    if (match) {
        const num = parseInt(match[1]);
        if (num > maxIndex) maxIndex = num;
    }
});

// Grab input files
const newFiles = fs.readdirSync(inputFolder).filter((file) => /\.(jpe?g|png)$/i.test(file));

newFiles.forEach((file, i) => {
    const inputPath = path.join(inputFolder, file);
    const paddedIndex = String(maxIndex + i + 1).padStart(2, "0"); // Continue numbering
    const outputFilename = `photo${paddedIndex}.webp`;
    const outputPath = path.join(outputFolder, outputFilename);

    sharp(inputPath)
        .rotate()
        .resize({ width: 1200 })
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`✓ Saved: ${outputFilename}`))
        .catch((err) => console.error(`✗ Error with ${file}:`, err));
});
