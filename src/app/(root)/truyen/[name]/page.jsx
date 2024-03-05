const SingleNovelPage = ({ params }) => {
  const { name } = params;
  return (
    <div className="bg-white">
      <h1>{name}</h1>
    </div>
  );
};

export default SingleNovelPage;
