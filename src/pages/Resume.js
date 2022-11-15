import draftResume from '../assets/resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

function resume() {
  return (
    <>
      <NavBar />
      <div className="sm:min-w-full max-w-xl flex flex-col align-center mx-auto ">
        <Document
          className="mx-auto"
          file={draftResume}
          options={options}
        >
          <Page size="A4" height={600} pageIndex={0} />
        </Document>
      </div>
      <Footer />
    </>
  );
}

export default resume;
