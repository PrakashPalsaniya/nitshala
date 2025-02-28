import { Download } from "lucide-react";

const DownloadCard = ({ title, branch, filename, size, downloadLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md border">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-black">{title}</h2>
        <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-md">{branch}</span>
      </div>
      <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
        <span className="text-lg">📄</span>
        <p>{filename} <span className="text-gray-400">({size})</span></p>
      </div>
      <a
        href={downloadLink}
        download
        className="mt-4 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md w-full text-center font-medium hover:bg-gray-900 transition"
      >
        <Download size={16} /> Download
      </a>
    </div>
  );
};

export default DownloadCard;
