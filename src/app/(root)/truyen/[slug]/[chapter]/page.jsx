const SingleChapterPage = ({ params }) => {
  const { name, chapter } = params;
  return (
    <div>
      <h1>Day la ten {name}</h1>
      <h2>Day la chuong {chapter}</h2>
    </div>
  );
};

export default SingleChapterPage;
