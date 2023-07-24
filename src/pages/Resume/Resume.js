import draftResume from "../../assets/resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer";
import { MdCloudDownload } from "react-icons/md";
import throttle from "lodash/throttle";
import { useRef, useState, useEffect } from "react";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};
const buttonStyling = `flex flex-wrap font-neueMachina w-48 font-semibold bg-gradient-to-r from-primary via-primary to-accent
  text-white rounded-md ring-2 ring-slate md:px-6 md:py-2 p-2
  hover:bg-white hover:twitter hover:ring-text mx-auto mb-5 mt-5 shadow-lg shadow-slate`;

function Resume() {
  const [initialWidth, setInitialWidth] = useState(null);

  const pdfWrapper = useRef(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(
        pdfWrapper.current.getBoundingClientRect().width
      );
    }
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(setPdfSize, 3000));
    setPdfSize();
    return () => {
      window.removeEventListener(
        "resize",
        throttle(setPdfSize, 3000)
      );
    };
  }, []);

  return (
    <>
      <NavBar />

      <a
        href={draftResume}
        download="tim-quattrochi-resume.pdf"
        target="_blank"
        rel="noreferrer"
        className={buttonStyling}
      >
        <MdCloudDownload size={32} />
        <span className="ml-2 text-sm leading-3 py-2">
          Download it.
        </span>
      </a>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          id="pdfWrapper"
          style={{ width: "100vw" }}
          ref={pdfWrapper}
        >
          <Document file={draftResume} options={options}>
            <Page pageNumber={1} width={initialWidth} loading="" />
            <Page pageNumber={2} width={initialWidth} loading="" />
          </Document>
        </div>
      </div>
      <div className="ml-auto z-20">
        <Footer />
      </div>
    </>
  );
}

export default Resume;
