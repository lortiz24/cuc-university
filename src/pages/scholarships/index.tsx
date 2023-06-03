import { ComponentWithPadding } from "@/components/layouts/ComponentWithPadding";
import { MainLayout } from "@/components/layouts/MainLayout";
import { ScolarchiptDown } from "@/components/scolarships/ScolarchiptDown";
import { ScolarhipsUp } from "@/components/scolarships/ScolarhipsUp";
import React from "react";

const index = () => {
  return (
    <MainLayout title="Scholarships">
      <ComponentWithPadding>
        <ScolarhipsUp />
      </ComponentWithPadding>
      <ScolarchiptDown />
    </MainLayout>
  );
};

export default index;
