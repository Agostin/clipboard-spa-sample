type TParagraph = {
  title: string;
  content: string;
};

const Paragraph = (params: TParagraph) => {
  return (
    <div className="max-w-lg text-center space-y-4 mx-auto">
      <h2 className="font-['Bai_Jamjuree'] text-3xl font-bold">
        {params.title}
      </h2>
      <p className="text-slate-300 text-center text-sm font-['Bai_Jamjuree']">
        {params.content}
      </p>
    </div>
  );
};

export default Paragraph;
