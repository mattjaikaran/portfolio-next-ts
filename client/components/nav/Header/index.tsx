import Link from 'next/link'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Show,
  Hide,
  Box,
  Button,
} from '@chakra-ui/react'
import { 
  AddIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon
} from '@chakra-ui/icons'
import styles from './Header.module.scss'
import { routes } from '../../../lib/routes'

const Header = () => {
  const renderRoutes = (menuItems: typeof routes) => {
    return menuItems.map(({ id, name, url}) => (
      <Link key={id} href={url}>{name}</Link>
    ))}
  return (
    <div className={styles.header}>
      <Hide below="md">
        <Box>
          {renderRoutes(routes)}
        </Box>
      </Hide>
      {/* <Hide above="md"> */}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />}>
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />}>
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />}>
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />}>
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
      {/* </Hide> */}
    </div>
  )
}

export default Header