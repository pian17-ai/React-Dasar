import { useCallback, useEffect, useState } from "react";
import {
  deleteCourse,
  indexCourses,
  storeCourse,
  updateCourse,
} from "../services/courseServices";

import AppLayout from "../layout/AppLayout";

export default function useCourse() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState([false]);
  const [edit, setEdit] = useState([false]);

  const load = useCallback(async () => {
    try {
      const res = await indexCourse();
      setData(res.data?.data || res.data || []);
    } catch (err) {
      console.error("API ERROR: ", err);
      setData([]);
    }
  });
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({});

  // paging
  useEffect(() => {
    const load = async () => {
      try {
        const res = await indexCourses(page);
        setData(res.data.data);
        setMeta(res.data);
      } catch (err) {
        console.error("ERROR : ", err);
      }
    };
    load();
  }, [page]);

  // save update
  const save = async (form) => {
    console.log("Simpan data:", form);
    try {
      if (edit) {
        await updateCourse(edit.officeCode, form);
      } else {
        await storeCourse(form);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const remove = async (id) => {
    if (confirm("Delete this Course?")) {
      await deleteCourse(id);
    }
  };

  return (
    <AppLayout>
            
    </AppLayout>
  );
}
