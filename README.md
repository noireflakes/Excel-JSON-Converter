# 📊 Excel-JSON Converter

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![XLSX](https://img.shields.io/badge/XLSX-Library-green)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A simple and intuitive web application to convert Excel spreadsheets into JSON files and vice versa.

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## 📖 About

Excel-JSON Converter is a React-based web application that makes it easy to convert between Excel spreadsheets and JSON format. Whether you're a developer needing to transform data for your application or a data analyst working with different file formats, this tool simplifies the conversion process with an intuitive drag-and-drop interface.

## ✨ Features

### 🔄 Two-Way Conversion
- **Excel to JSON** - Convert spreadsheets to structured JSON data
- **JSON to Excel** - Transform JSON data into readable spreadsheets

### 📁 Multiple Format Support
- ✅ `.xlsx` - Microsoft Excel (2007+)
- ✅ `.xls` - Microsoft Excel (Legacy)
- ✅ `.csv` - Comma-Separated Values
- ✅ `.ods` - OpenDocument Spreadsheet

### 🎯 User-Friendly Interface
- **Drag & Drop** - Simply drag files into the application
- **File Picker** - Traditional file selection option
- **Auto-Detection** - Automatically detects file type
- **Instant Conversion** - Fast processing and download
- **Responsive Design** - Works on desktop and mobile devices

### 🚀 Additional Features
- No server required - all processing happens in the browser
- Privacy-focused - files never leave your device
- No file size limits (browser memory dependent)
- Clean and modern UI
- Fast performance

## 🎬 Demo

<div align="center">

### Excel → JSON
Upload an Excel file and instantly convert it to JSON format

### JSON → Excel  
Upload a JSON file and convert it to a downloadable spreadsheet

</div>

## 🛠️ Tech Stack

- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[XLSX](https://www.npmjs.com/package/xlsx)** - Library for reading and writing Excel files in JavaScript
- **[react-icons](https://react-icons.github.io/react-icons/)** - Icon library for React applications

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **npm** or **yarn**

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/noireflakes/Excel-JSON-Converter.git
   cd Excel-JSON-Converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to access the application

## 🚀 Usage

### Converting Excel to JSON

1. **Upload your file**
   - Drag and drop your Excel file into the designated area
   - OR click the "Choose File" button to select a file

2. **Automatic detection**
   - The application automatically detects the file type

3. **Convert**
   - Click the "Convert to JSON" button
   - The JSON file will be downloaded automatically

### Converting JSON to Excel

1. **Upload your JSON file**
   - Drag and drop your JSON file into the designated area
   - OR click the "Choose File" button to select a file

2. **Convert**
   - Click the "Convert to Excel" button
   - The Excel spreadsheet will be downloaded automatically

### Supported JSON Format

For JSON to Excel conversion, your JSON should be an array of objects:

```json
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  },
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 25
  }
]
```

This will create an Excel file with columns: `name`, `email`, and `age`.

## 📁 Project Structure

```
Excel-JSON-Converter/
├── public/
│   ├── index.html          # HTML template
│   └── ...
├── src/
│   ├── components/         # React components
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── index.js            # Application entry point
│   └── ...
├── package.json            # Dependencies and scripts
├── README.md               # This file
└── LICENSE                 # MIT License
```

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at `http://localhost:3000`
- Hot reload enabled
- Automatic browser refresh

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder
- Optimizes performance
- Minifies files
- Ready for deployment

### `npm run eject`
**Note: this is a one-way operation!**

Ejects from Create React App for advanced configuration.

## 🌐 Deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Drag and drop the `build` folder to [Netlify](https://app.netlify.com/drop)
   - Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   "homepage": "https://yourusername.github.io/Excel-JSON-Converter",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 💡 Use Cases

### For Developers
- Convert API responses to Excel for analysis
- Transform database exports into JSON
- Quick data format conversion during development

### For Data Analysts
- Convert Excel reports to JSON for data processing
- Share data in different formats with teams
- Quick format conversion without programming

### For Content Managers
- Export CMS data to Excel for review
- Convert spreadsheet data to JSON for web applications
- Bulk data format conversion

## 🐛 Troubleshooting

### Common Issues

**Issue: File not converting**
- Ensure your Excel file has proper structure (rows and columns)
- Check that JSON files are properly formatted arrays of objects

**Issue: Large files not processing**
- Browser memory limitations may affect very large files
- Try splitting large files into smaller chunks

**Issue: Special characters not displaying**
- Ensure your files use UTF-8 encoding
- Some special characters may require proper encoding

**Issue: Empty output**
- Check that your Excel sheets contain data
- Ensure JSON arrays are not empty

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Add new features
   - Fix bugs
   - Improve documentation

4. **Commit your changes**
   ```bash
   git commit -m "Add: Amazing new feature"
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Test your changes thoroughly
- Update documentation as needed
- Add tests for new features

## 📋 Roadmap

Future features and improvements:

- [ ] Multiple sheet support for Excel files
- [ ] Custom delimiter options for CSV files
- [ ] Preview before download
- [ ] Batch file conversion
- [ ] Advanced JSON formatting options
- [ ] Excel formula preservation
- [ ] Data validation and error checking
- [ ] Export to additional formats (XML, YAML)
- [ ] Dark mode theme
- [ ] Conversion history

## 🔒 Privacy

Your privacy matters:

- ✅ All conversions happen **locally in your browser**
- ✅ No files are uploaded to any server
- ✅ No data is stored or tracked
- ✅ Completely offline-capable once loaded
- ✅ Open source - verify the code yourself

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

### MIT License Summary

- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ℹ️ License and copyright notice required

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **SheetJS** - For the powerful XLSX library
- **React Icons** - For the beautiful icon set
- **Open Source Community** - For inspiration and support

## 📧 Support

Need help or have questions?

- **GitHub Issues**: [Report a bug or request a feature](https://github.com/noireflakes/Excel-JSON-Converter/issues)
- **Repository**: [Excel-JSON-Converter](https://github.com/noireflakes/Excel-JSON-Converter)

## 📊 Related Projects

Looking for similar tools?

- [CSV to JSON Converter](https://github.com/topics/csv-to-json)
- [Data Format Converters](https://github.com/topics/data-conversion)
- [Excel Processing Tools](https://github.com/topics/excel)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ for easy data conversion

**No tracking • No servers • 100% client-side processing**

</div>
