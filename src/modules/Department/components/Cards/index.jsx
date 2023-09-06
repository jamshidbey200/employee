import { Box, Button, Heading } from "@chakra-ui/react";
import BackButton from "components/BackButton";
import FormRow from "components/FormElements/FormRow";
import FormInput from "components/FormElements/Input/FormInput";
import Header, {
  HeaderExtraSide,
  HeaderLeftSide,
  HeaderTitle,
} from "components/Header";
import { Page } from "components/Page";
import PageCard, {
  PageCardFooter,
  PageCardForm,
  PageCardHeader,
} from "components/PageCard";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Cards({ title = "", count = 0, icon = "" }) {
  const navigate = useNavigate();
  const { control } = useForm({});
  return (
    <>
      <Header>
        <HeaderLeftSide ml={"-40px"}>
          <BackButton />
          <HeaderTitle>Добавить</HeaderTitle>
        </HeaderLeftSide>
        <HeaderExtraSide></HeaderExtraSide>
      </Header>
      <Box
        borderRadius={"6px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        p={4}
      >
        <Page>
          {/* h='calc(100vh - 56px)' */}
          <PageCard w={600}>
            <PageCardHeader>
              <HeaderLeftSide>
                <Heading fontSize="xl">Данные пользователя</Heading>
              </HeaderLeftSide>
            </PageCardHeader>

            <PageCardForm p={6} spacing={8}>
              <FormRow label="Имя:" required>
                <FormInput
                  control={control}
                  name="first_name"
                  placeholder="Введите имя пользователя"
                  autoFocus
                  required
                />
              </FormRow>
              <FormRow label="Описание:" required>
                <FormInput
                  control={control}
                  name="last_name"
                  placeholder="Введите oписание"
                  required
                />
              </FormRow>
            </PageCardForm>

            <PageCardFooter mt={6}>
              <Button type="submit" ml="auto" onClick={() => navigate(-1)}>
                Сохранить
              </Button>
            </PageCardFooter>
          </PageCard>
        </Page>
      </Box>
    </>
  );
}
