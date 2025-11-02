import { useState } from "react";
import * as XLSX from "xlsx";
import "./MainContent.css";
import { flatten } from "flat";
import { MdDriveFolderUpload } from "react-icons/md";

function MainContent() {
  const [Alert, setAlert] = useState(false);
  const [File, setFile] = useState(null);
  const [FileData, setFileData] = useState(null);

  const MessageShow = () => {
    console.log("message is being called");
    let time = 0;
    const timer = setInterval(() => {
      time += 1;
      console.log(`This is the time : ${time}`);

      if (time >= 5) {
        clearInterval(timer);
        setAlert(false);
        console.log("Timer has end");
      }
    }, 1000);
  };

  const JsontoExcel = () => {
    if (!FileData) {
      console.error("No file data available");
      return;
    }

    console.log("Converting JSON to Excel");
    console.log("Original data:", FileData);

    try {
      let dataArray;

      if (Array.isArray(FileData)) {
        dataArray = FileData;
      } else if (typeof FileData === "object") {
        const firstArrayProperty = Object.keys(FileData).find((key) =>
          Array.isArray(FileData[key])
        );

        if (firstArrayProperty) {
          dataArray = FileData[firstArrayProperty];
        } else {
          dataArray = [FileData];
        }
      } else {
        throw new Error("Invalid data format");
      }

      const flattenedData = dataArray.map((item) => flatten(item));
      const worksheet = XLSX.utils.json_to_sheet(flattenedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      const fileName = File
        ? File.name.replace(".json", ".xlsx")
        : "converted_file.xlsx";
      XLSX.writeFile(workbook, fileName);

      console.log("Excel file created successfully");
    } catch (error) {
      console.error("Error converting to Excel:", error);
      setAlert(true);
      MessageShow();
    }
  };

  const ExceltoJson = () => {
    if (!File) {
      console.error("No file selected");
      return;
    }

    console.log("Converting Excel to JSON");

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        const jsonString = JSON.stringify(jsonData, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download =
          File.name.replace(/\.(xlsx|xls|csv)$/, ".json") ||
          "converted_file.json";
        a.click();
        URL.revokeObjectURL(url);

        console.log("JSON file created successfully");
      } catch (error) {
        console.error("Error converting to JSON:", error);
        setAlert(true);
        MessageShow();
      }
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
      setAlert(true);
      MessageShow();
    };

    reader.readAsArrayBuffer(File);
  };

  const readJSONFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        setFileData(json);
        console.log("JSON parsed successfully:", json);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setAlert(true);
        MessageShow();
      }
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
      setAlert(true);
      MessageShow();
    };

    reader.readAsText(file);
  };

  const FileHandler = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    console.log("File selected:", file.name);
    console.log("File type:", file.type);

    setFile(file);

    const jsonBtn = document.getElementById("jsonbtn");
    const excelBtn = document.getElementById("excelbtn");
    jsonBtn.style.display = "none";
    excelBtn.style.display = "none";

    if (
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.type === "application/vnd.ms-excel" ||
      file.type === "text/csv"
    ) {
      excelBtn.style.display = "block";
      console.log("Excel file detected");
    } else if (file.type === "application/json") {
      readJSONFile(file);
      jsonBtn.style.display = "block";
      console.log("JSON file detected");
    } else {
      setAlert(true);
      MessageShow();
      console.log("Invalid file type");
    }
  };

  return (
    <div className="main">
      <div className="title-container">
        <h2>ExcelJson Converter</h2>
        <p>Convert Excel spreadsheets to JSON and back with ease</p>
      </div>
      <div className="main-content" id="main">
        {Alert && (
          <div className="alert alert-info alert-dismissible fade show">
            <strong>Error!</strong> Invalid file type or file could not be
            processed. Please upload a valid JSON or Excel file.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={() => setAlert(false)}
            ></button>
          </div>
        )}

        <div className="file-container">
          <MdDriveFolderUpload size={150} color="#7A73D1" />
          <p id="input-text">Drag & Drop your file here</p>
          <input
            type="file"
            id="fileInput"
            onChange={FileHandler}
            accept=".json,.xlsx,.xls,.csv"
          />
        </div>

        <button
          id="jsonbtn"
          className="btn"
          style={{ display: "none" }}
          onClick={JsontoExcel}
        >
          Convert To Excel
        </button>
        <button
          id="excelbtn"
          className="btn"
          style={{ display: "none" }}
          onClick={ExceltoJson}
        >
          Convert to Json
        </button>
      </div>
    </div>
  );
}

export default MainContent;
