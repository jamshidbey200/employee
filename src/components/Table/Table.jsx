import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import cls from "./Table.module.scss";
import {
  MdDeleteOutline,
  MdMoreHoriz,
  MdOutlineModeEdit,
  MdTableChart,
} from "react-icons/md";
import {
  Previous,
  Paginator,
  PageGroup,
  Next,
  Container,
} from "chakra-paginator";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { BiFileBlank } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const tableHead = ["Name", "Description"];
const tableBody = [
  {
    name: "Ali",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Vali",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Sardor",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Begzod",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Saida",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Mavluda",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Nozima",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Dilshod",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Shuhrat",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Hamdam",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Alisher",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Nodir",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Doniyor",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Hikmat",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Surat",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Aslbek",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Begzod",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Sardor",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Shahzod",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Ziyod",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Xursand",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Rahmat",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Eshon",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "Dilshod",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "davron",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
  {
    name: "salim",
    description:
      "lorem is not just a normal snippet—it's actually a generator. Every time you expand it, it will generate a 30-words dummy text",
  },
];

export default function UTable() {
  const [itemLimit, setItemLimit] = useState(10);
  const pagesQuantity = Math.ceil(tableBody.length / itemLimit);
  const [curPage, setCurPage] = useState(1);
  const [curItems, setCurItems] = useState([]);
  const initRef = React.useRef();
  const navigate = useNavigate();

  const baseStyles = {
    p: "4px 8px",
  };

  const normalStyles = {
    ...baseStyles,
  };

  const activeStyles = {
    ...baseStyles,
    bg: "#0e73f0",
    color: "white",
    borderRadius: "6px",
    width: "25px",
  };

  const handlePageChange = (page) => {
    setCurPage(page);
  };

  useEffect(() => {
    const offset = (curPage - 1) * itemLimit;
    const getList = (curPage, itemLimit) => {
      setCurItems(tableBody.slice(offset, offset + itemLimit));
    };

    getList(curPage, itemLimit);
  }, [curPage, itemLimit]);

  const numbers = [10, 20, 30, 40, 50];

  return (
    <div className={cls.table}>
      <TableContainer sx={{ border: "1px solid #F4F6FA", margin: "16px" }}>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th className={cls.numbers}>№</Th>
              {tableHead?.map((el, index) => (
                <Th key={index} className={cls.table__header}>
                  {el}
                </Th>
              ))}

              <Th
                sx={{
                  border: "1px solid #F4F6FA",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MdTableChart size={27} color="#0e73f0" />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {curItems?.map((el, index) => (
              <Tr key={index} className={cls.body__table}>
                <Td>{curPage * 10 - 10 + index + 1}</Td>
                <Td>{el?.name}</Td>
                <Td>{el?.description}</Td>
                <Td className={cls.actions}>
                  <Popover>
                    <PopoverTrigger>
                      <button>
                        <div className={cls.action__icon}>
                          <MdMoreHoriz size={28} color="#0e73f0" />
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader
                        onClick={() => navigate("/department/create")}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          fontSize: "14px",
                          lineHeight: "24px",
                          letterSpacing: "0.084px",
                          cursor: "pointer",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#e3effe",
                            padding: "8px",
                            borderRadius: "6px",
                          }}
                        >
                          <MdOutlineModeEdit color="#4094f7" />
                        </Box>
                        Изменить
                      </PopoverHeader>
                      <PopoverBody
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          fontSize: "14px",
                          lineHeight: "24px",
                          letterSpacing: "0.084px",
                          cursor: "pointer",
                        }}
                      >
                        {" "}
                        <Box
                          sx={{
                            backgroundColor: "#fee8e6",
                            padding: "8px",
                            borderRadius: "6px",
                          }}
                        >
                          <MdDeleteOutline size={19} color="#f76659" />
                        </Box>
                        Удалить
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Paginator
        onPageChange={handlePageChange}
        pagesQuantity={pagesQuantity}
        normalStyles={normalStyles}
        activeStyles={activeStyles}
      >
        <div className={cls.pagination__wrap}>
          <Container justify="left" pl={17}>
            <Popover
              closeOnBlur={true}
              placement="top"
              initialFocusRef={initRef}
            >
              {({ isOpen, onClose }) => (
                <>
                  <PopoverTrigger>
                    <Button
                      colorScheme="white"
                      sx={{
                        border: "1px solid #E5E9EB",
                        padding: "10px 16px 10px 10px",
                        gap: "12px",
                        color: "#303940",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                      value={itemLimit}
                      onChange={(e) => {
                        setItemLimit(Number(e.target.value));
                      }}
                    >
                      <BiFileBlank size={20} color="rgb(14, 115, 240)" />
                      Показать по {itemLimit}
                    </Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent
                      sx={{ width: "157px !important", textAlign: "center" }}
                    >
                      <PopoverBody sx={{ cursor: "pointer" }}>
                        {numbers.map((itemLimits) => (
                          <option
                            key={itemLimits}
                            value={itemLimit}
                            onClick={() => {
                              setItemLimit(itemLimits), onClose();
                            }}
                            style={{
                              fontSize: "14px",
                              lineHeight: "26px",
                              letterSpacing: "0.5px",
                              textAlign: "left",
                            }}
                          >
                            Показать по {itemLimits}
                          </option>
                        ))}
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </>
              )}
            </Popover>
          </Container>
          <Container justify="right" pr={7}>
            <Previous m={6}>
              <CgChevronLeft
                size={20}
                className={curPage === 1 ? "#252c32" : cls.cgIcon}
              />
            </Previous>
            <div className={cls.pagination}>
              <div>
                <PageGroup isInline align="center" />
              </div>
              <div style={{ margin: "0 10px 0 10px" }}>...</div>
              <div>{Math.floor(tableBody?.length)}</div>
            </div>
            <Next m={6}>
              <CgChevronRight
                size={20}
                className={
                  Math.ceil(tableBody?.length / itemLimit) === curPage
                    ? "#252c32"
                    : cls.cgIcon
                }
              />
            </Next>
          </Container>
        </div>
      </Paginator>
    </div>
  );
}
