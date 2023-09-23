import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

const MyModal = ({
  projects,
  currentIndex,
  previousProject,
  nextProject,
  closeModal,
}) => {
  const modalRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    if (!modalRef.current.contains(e.target)) {
      closeModal(e);
    }
  };

  const handleTabKey = useCallback(
    (e) => {
      const focusableModalElements =
        modalRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
      const firstElement = focusableModalElements[0];
      const lastElement =
        focusableModalElements[focusableModalElements.length - 1];

      if (!e.shiftKey && document.activeElement !== firstElement) {
        firstElement.focus();
        return e.preventDefault();
      }
      if (e.shiftKey && document.activeElement !== lastElement) {
        lastElement.focus();
        e.preventDefault();
      }
    },
    [modalRef]
  );

  const keyListenersMap = useMemo(() => {
    return new Map([
      ["Escape", closeModal],
      ["Tab", handleTabKey],
    ]);
  }, [closeModal, handleTabKey]);

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.key);
      return listener && listener(e);
    }
    window.addEventListener("keydown", keyListener);

    return () => window.removeEventListener("keydown", keyListener);
  }, [closeModal, keyListenersMap]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={handleClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-lg"
        ref={modalRef}
      >
        <h2 className="text-2xl font-semibold mb-4 dark:text-dark-primary-text">
          {projects[currentIndex].name}
        </h2>
        <p className="text-gray-dark mb-4 dark:text-dark-primary-text">
          {projects[currentIndex].description}
        </p>

        <img
          src={projects[currentIndex].image}
          alt="work"
          className="w-half mx-auto h-48 md:h-64 object-cover transition-transform transform group-hover:scale-105"
        />

        <div className="flex justify-between mt-4">
          <button
            onClick={previousProject}
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Previous
          </button>
          <button
            onClick={nextProject}
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        </div>
        <button
          onClick={(e) => closeModal(e)}
          className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MyModal;
