import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/request";
import { UploadFile } from "antd";

interface type {
  title: string;
  image?: {
    file: File;
    filelist: UploadFile;
  };
}
export const useGetEditCatygory = (id: string) => {
  return useQuery({
    queryKey: ["dataEdit", id],
    queryFn: () =>
      request.get<type>(`/category/${id}/`).then((res) => res.data),
  });
};
