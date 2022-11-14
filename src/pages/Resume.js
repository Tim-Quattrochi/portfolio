import draftResume from '../assets/resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function resume() {
  return (
    <>
      <NavBar />
      <Document
        className="flex justify-center items-center h-screen sm:object-contain"
        file={draftResume}
      >
        <Page scale={1.5} width={350} pageNumber={1} />
      </Document>
      <Footer />
    </>
  );
}

export default resume;
