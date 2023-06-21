const ProjectCard = ({
  name,
  image,
  description,
  tech,
  link,
  link2,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="bg-[#000080] w-full md:w-1/2 dark:bg-slate-800 rounded-lg overflow-hidden"
    >
      <img
        src={image}
        alt="work"
        className="w-full  h-36 md:h-48 object-fit lg:object-cover"
      />
      <div className="w-full  p-5 text-gray dark:text-gray ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {name}
        </h3>
        <p className="flex text-white flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
          {tech.map((item, i) => (
            <span
              key={i}
              className="inline-block px-2 py-1 bg-gray dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
