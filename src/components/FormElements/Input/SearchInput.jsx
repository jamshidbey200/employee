import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

const SearchInput = ({ placeholder="Search...", ...props }) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="tel" placeholder={placeholder} { ...props } />
    </InputGroup>
  )
}

export default SearchInput
