import { Button } from "@chakra-ui/react";
import Header from "components/Header";
import UserTable from "components/UserTable/UserTable";
import { HiMiniPlus } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Department = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title="Отделение">
        <Button onClick={() => navigate("/department/create")}>
          <HiMiniPlus size={20} />
          Create
        </Button>
      </Header>
      <UserTable />
    </>
  );
};
export default Department;
