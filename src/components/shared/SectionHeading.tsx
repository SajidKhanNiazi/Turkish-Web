type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionHeadingProps) => {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 font-mono mb-1">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-display font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-lg font-medium text-gray-400 leading-relaxed mt-1">{subtitle}</p>
      ) : null}
    </div>
  );
};

