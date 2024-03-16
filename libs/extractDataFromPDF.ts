const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract();
const fs = require("fs");
const path = require("path");

const extractDataFromPDF = (relativePath) => {
  return new Promise((resolve, reject) => {

    //modify path to the file
    const filepath = path.join(process.cwd(), relativePath);

    // console.log("File path: ", filepath);

    const buffer = fs.readFileSync(filepath);
    const options = {}; /* see below */
    let extractedText = ""; // String to store extracted text
    let scheema = `Schema :
    ... interface ContactInformation {
    ...   firstName: string;
    ...   lastName: string;
    ...   email: string;
    ...   phone: string;
    ...   address: string;
    ... }
    ... 
    ... interface Education {
    ...   degree: string;
    ...   school: string;
    ...   major: string;
    ...   graduationDate: string;
    ...   aggrigateMarks: number;
    ... }
    ... 
    ... interface WorkExperience {
    ...   jobTitle: string;
    ...   company: string;
    ...   location: string;
    ...   startDate: string;
    ...   endDate: string;
    ...   description: string;
    ... } 
    ...
    ... interface Certification {
    ...   name: string;
    ...   issuingOrganization: string;
    ...   issuedDate: string;
    ...   expiryDate: string;
    ... }
    ...
    ... interface Project {
    ...   title: string;
    ...   date: string;
    ...   description: string;
    ... }
    ...
    ... interface Achievement {
    ...   title: string;
    ...   date: string;
    ... }
    ... 
    ... interface AdditionalInformation {
    ...   languages: string[];
    ...   volunteerExperience: string;
    ...   publications: string;
    ...   interests: string[];
    ... }
    ... 
    ... interface Reference {
    ...   name: string;
    ...   title: string;
    ...   company: string;
    ...   contactInformation: string;
    ... }
    ... 
    ... interface ResumeInformation {
    ...   contactInformation: ContactInformation;
    ...   summary: string;
    ...   education: Education[];
    ...   workExperience: WorkExperience[];
    ...   skills: string[];
    ...   certifications: Certification[];
    ...   projects: Project[];
    ...   achievements: Achievement[];
    ...   additionalInformation: AdditionalInformation;
    ...   references: Reference[];
    ... }`;

    pdfExtract.extractBuffer(buffer, options, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      // Iterate over each page
      data.pages.forEach((page, index) => {
        page.content.forEach((contentItem) => {
          if (contentItem.str) {
            // Append extracted text to the string
            extractedText += contentItem.str + "\n";
          }
          // Skip image data
        });
      });

      // Construct the prompt string
      const prompt =
        "Your task is to structure this information into a JSON object according to a predefined schema. Fill in the fields of the schema according to the extracted information. If some data is not available, add null to the schema. In skills field, mention only names of technologies.\n" +
        scheema +
        "\n" +
        extractedText;

      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      };

      const apiUrl =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBUyOFNeDzQtGJpLIYbIbuh2hAdDrWqyi8 ";

      fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          const jsonData = data.candidates[0].content.parts[0].text;
          resolve(jsonData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

extractDataFromPDF('app/assets/resume.pdf').then((data) => {
  console.log(data);
}
).catch((error) => {
  console.log(error);
});
