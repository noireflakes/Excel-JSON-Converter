import { useEffect } from "react"
import Footer from "./components/footer"
import * as XLSX from "xlsx";
import "./css/mainpage.css"
import { FaFileUpload } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { MdDriveFolderUpload } from "react-icons/md";
function Mainpage(){

   
   useEffect(() => {
    const fileInput = document.getElementById('fileInput');
    const jsonbtn = document.getElementById("jsonbtn");
    const excelbtn = document.getElementById("excelbtn");
    const inputText=document.getElementById("input-text");
    jsonbtn.style.display="none";
    excelbtn.style.display="none";
    let file;

    const handleChange = (e) => {
        jsonbtn.style.display="none";
        excelbtn.style.display="none";

        if (e.target.files.length==0){
            
        }
        else{
            file = e.target.files[0];

            if (file.type === "application/json") {
                inputText.innerHTML=file.name
                console.log('this is a json');
                jsonbtn.style.display = "inline";
            } else if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                console.log('this is an excel');
                inputText.innerHTML=file.name;
                
                

    
                excelbtn.style.display = "inline";
            } else {
                const main = document.getElementById("main");
                const div = document.createElement("div");
                div.innerHTML = "File is Invalid";
                
                div.style.color = "red";
                main.appendChild(div);
                console.log('this is invalid');
            }
        }

        
    };

    const handleJsonClick = () => {

     
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = JSON.parse(event.target.result);
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, worksheet);
            XLSX.writeFile(workbook, "data.xlsx");
        };
        reader.readAsText(file);
    };

    const handleExcelClick = () => {
     

        const reader = new FileReader();
        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const json = XLSX.utils.sheet_to_json(worksheet);

            const blob = new Blob([JSON.stringify(json, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "data.json";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };
        reader.readAsArrayBuffer(file);
    };


    fileInput.addEventListener("change", handleChange);
    jsonbtn.addEventListener("click", handleJsonClick);
    excelbtn.addEventListener("click", handleExcelClick);

   
    return () => {
        fileInput.removeEventListener("change", handleChange);
        jsonbtn.removeEventListener("click", handleJsonClick);
        excelbtn.removeEventListener("click", handleExcelClick);
    };
});



    return (
    <>
        <div className="main">
            <div className="title-container">
                <h2>ExcelJson Converter</h2>
                <p>Convert Excel spreadsheets to JSON and back with ease</p>

            </div>
            <div className="main-content" id="main">
                <div className="file-container">
             

                    <MdDriveFolderUpload size={150} color="#7A73D1"/>
          
                    <p id="input-text">Drag & Drop your file here</p>
                    <input type="file" id="fileInput" />

                </div>
                

                <button id="jsonbtn" className="btn" style={{ display:"none" }}>Convert To Excel</button>
                <button id="excelbtn" className="btn" style={{ display:"none" }} >Convert to Json</button>

            </div>
           
     
            <Footer></Footer>
        </div>
        
    </>
    )
}

export default Mainpage