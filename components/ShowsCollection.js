import ShowThumbnail from "./ShowThumbnail";

function ShowsCollection({ results }) {
    return (
        <div className="flex flex-col space-y-4 my-8 px-8 max-w-[1250px] mx-auto">
            <h2 className="font-semibold">Popular Shows</h2>
            <div className="flex space-x-4 overflow-y-hidden overflow-x-scroll">
                {results.map((result) => (
                    <ShowThumbnail key={result.id} result={result} />
                ))}
            </div>
        </div>
    );
}

export default ShowsCollection;