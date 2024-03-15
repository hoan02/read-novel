const SingleChapterPage = ({ params }) => {
  const { novelSlug, chapterNumber } = params;
  return (
    <div>
      <h1>Day la ten {novelSlug}</h1>
      <h2>Day la chuong {chapterNumber}</h2>
    </div>
  );
};

export default SingleChapterPage;
