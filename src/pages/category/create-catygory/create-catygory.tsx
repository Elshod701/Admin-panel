import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { message } from "antd";
import { useGetKreateProduct } from "./service/mutation/useGetKreateProduct";
import GetEditForm from "../../../components/form/edit-form/get-Edit-form";
import Subcatygory from "../subCatygory/subcatygory";

const onChange = (key: string) => {
  console.log(key);
};

export interface dataType {
  title: string;
  image?: {
    file: File;
  };
  parent?: number;
}

const CreateCategory: React.FC = () => {
  const navigete = useNavigate();
  const { mutate, reset, isPending } = useGetKreateProduct();

  const onFinish = (values: dataType) => {
    const dataform = new FormData();
    dataform.append("title", values.title);
    if (values.image) dataform.append("image", values.image.file);
    if (values.parent) {
      dataform.append("parent", String(values.parent));
    }
    mutate(dataform, {
      onSuccess: () => {
        message.success("Malumot qushildi");
        navigete("/home/catygoryList");
        reset();
      },
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Catygory yaratish",
      children: <GetEditForm loading={isPending} onFinish={onFinish} />,
    },
    {
      key: "2",
      label: "Sub catygory yaratish",
      children: <Subcatygory />,
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default CreateCategory;
