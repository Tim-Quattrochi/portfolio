import draftResume from "../../assets/resume2.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer";
import { MdCloudDownload } from "react-icons/md";
import throttle from "lodash/throttle";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useRef, useState, useEffect } from "react";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

const buttonStyling = {
  downloadBtn: `flex md:flex-wrap font-neueMachina w-32 md:w-48 h-11 font-semibold bg-gradient-to-r from-primary via-primary to-accent
  text-white rounded-md ring-2 ring-linkedIn md:px-6 md:py-2 p-2
  hover:bg-white hover:twitter hover:ring-accent mx-auto mb-5 mt-5 shadow-lg shadow-linkedIn`,
  prevBtn: `w-32 md:w-48 font-neueMachina font-semibold bg-gradient-to-l from-primary via-primary to-accent
  text-white rounded-md ring-2 ring-linkedIn md:px-6 md:py-2 p-2
  hover:bg-white hover:twitter hover:ring-accent mx-auto mb-5 mt-5 shadow-lg shadow-linkedIn`,
  nextBtn: `w-32 md:w-48 font-neueMachina font-semibold bg-gradient-to-r from-primary via-primary to-accent
  text-white rounded-md ring-2 ring-linkedIn md:px-6 md:py-2 p-2
  hover:bg-white hover:twitter hover:ring-accent mx-auto mb-5 mt-5 shadow-lg shadow-linkedIn`,
};

function Resume() {
  const [initialWidth, setInitialWidth] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const pdfWrapper = useRef(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(
        pdfWrapper.current.getBoundingClientRect().width
      );
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const changePage = (offset) => {
    setPageNumber((prevPage) => prevPage + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };
  const nextPage = () => {
    changePage(1);
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
        className={buttonStyling.downloadBtn}
      >
        <MdCloudDownload size={24} />
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
          <Document
            file={draftResume}
            options={options}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <LoadingSpinner
                width={initialWidth}
                text={"Tim's PDF is loading..."}
              />
            }
          >
            <Page
              pageNumber={pageNumber}
              width={initialWidth}
              loading={
                <LoadingSpinner
                  width={initialWidth}
                  text={"Tim's PDF is loading..."}
                />
              }
            />
          </Document>
          <div>
            <div className="flex gap-1">
              <button
                type="button"
                hidden={pageNumber == 1}
                className={buttonStyling.prevBtn}
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                Previous Page
              </button>
              <p className="font-neueMachina ml-auto mt-4 mr-auto">
                Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                {numPages || "--"}
              </p>
              <button
                type="button"
                className={buttonStyling.nextBtn}
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Resume;
