import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../styles/Link.module.css"
import linksArray from './LinkArray'

const LinkItem = ({link}) => {
  const Router = useRouter()
  const {pathname} = Router
  const active =  pathname === link.path && styles.active

  return (
    <li className={`${styles.customBorder} ${active}  py-2 transition-all`}>
      <Link href={link.path} >
        {`${link.name} `}
      </Link>
    </li>
  )
}

export default LinkItem