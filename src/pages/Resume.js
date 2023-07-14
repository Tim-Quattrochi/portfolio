import draftResume from "../assets/resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";
import { MdCloudDownload } from "react-icons/md";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};
const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-slate via-slate to-slate
  text-green rounded-md ring-2 ring-slate px-10 py-2 
  hover:bg-white hover:text-blue hover:ring-slate mx-10 shadow-lg shadow-slate`;

function resume() {
  return (
    <>
      <div className="sm:min-w-full max-w-xl flex flex-col align-center mx-auto ">
        <Document
          className="mx-auto"
          file={draftResume}
          options={options}
        >
          <Page
            size="A4"
            width={800}
            height={1000}
            pageIndex={0}
            style={{ color: "blue" }}
          />
          <Page size="A4" width={800} height={1000} pageIndex={1} />
        </Document>
      </div>
      <div className="py-5 border-t-3/2">
        <div className="flex justify-center mt-4">
          <a
            href={draftResume}
            download="tim-quattrochi-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={buttonStyling}
          >
            <MdCloudDownload />
            <span className="sr-only">Github</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default resume;
