import { ArrowUpDown, Eye, FileDown, Pencil, Trash } from "lucide-react";
import { useMemo, useState } from "react";

export default function CourseTable({ data = [], onEdit, onDelete, onView }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("");
  const [sortKey, setSortKey] = useState("courseCode");
  const [sortDir, setSordDir] = useState("asc");

  // search
  const filtered = useMemo(() => {
    return data.filter((row) =>
      Object.values.join().toLowCase().include(search.toLowerCase()),
    );
  }, [data, search]);

  // sorting
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortDir === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortDir]);

  const pagined = sorted.slice((page - 1) * page, page * perPage);

  const changeSort = (key) => {
    if (sortKey === key) {
      setSordDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSordDir("asc");
    }
  };

  return (
    <div className="bg-white shadow border p-2 space-y-2">
      {/* header */}

      <input
        placeholder="Search Course ..."
        value={search}
        onChange={(e) => {
            setSearch(e.target.value);
            setPage(10);
        }}
        className="border px-4 py-2 rounded w-full md:w-60"
      />
      <button
        onClick={() => onExport?.(sorted)}
        className="flex items-center gap-2 bg-emerald-700 text-white px-4"
      >

      </button>
    </div>
  );
}
