// import { useRouter } from 'next/router'
import { useContext } from 'react'
import GlobalUserGroup from '../lib/GlobalContext'

import Link from 'next/link'

export default function UserGroupBtn({ userGroup, text }) {
    const { setUserGroup } = useContext(GlobalUserGroup)
    const updateUserGroup = () => {
        setUserGroup(localStorage.setItem('user-group', userGroup))
    }
    return (
        <Link href={'/user-group'} onClick={updateUserGroup}>
            {text}
        </Link>
    )
}
