import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
  console.log("params", params);
  const { title } = params;
  const { userId } = auth();
  console.log("user id",userId);

  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId);

  const type: TransformationTypeKey = title;
  console.log("type", type);
  const transformation = transformationTypes[type];

  console.log("tarns", transformation);
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      {/* <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      /> */}
    </>
  );
};

export default AddTransformationTypePage;
