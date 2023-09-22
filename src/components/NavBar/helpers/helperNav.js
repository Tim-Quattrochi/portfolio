import { Link } from "react-router-dom";
/**
 *
 * @param {string} currPath The current path of the page
 * @param {string} pathToCheck The path to check for rendering the link
 * @param {string} name The text to display as the link
 * @returns  {JSX.Element | null}
 */
export const renderLinkBasedOnPath = (
  currPath,
  pathToCheck,
  name
) => {
  //The project link needs to be an anchor tag because it is
  //simply scrolling to the #projects id on the home page.
  const liClass =
    "bg-text-gray-dark rounded p-1 text-white hover:text-secondary my-2 md:my-6 uppercase";

  const linkToReturn = (
    <li className={liClass}>
      {pathToCheck.startsWith("#") ? (
        <a href={pathToCheck}>{name}</a>
      ) : (
        <Link to={pathToCheck}>{name}</Link>
      )}
    </li>
  );

  if (currPath === "/" && pathToCheck === "/") {
    return null;
  } else if (
    (currPath === "/resume" || currPath === "/contact") &&
    pathToCheck === "#projects"
  ) {
    return null;
  } else {
    return linkToReturn;
  }
};
