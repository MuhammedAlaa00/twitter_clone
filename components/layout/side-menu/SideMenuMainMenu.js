import React from 'react'
import {
	HomeIcon, HashIcon, NotificationIcon,
	MessagesIcon, BookmarksIcon, MoreIcon,
	UserIcon, ListsIcon
} from "../../Icons"
import SideMenuMainMenuItem from './SideMenuMainMenuItem'
import { WhiteColor } from "../../../styles/Colors.module.scss"
import { useSession } from 'next-auth/react';
import LogoConatiner from "./LogoConatiner"
import TweetActionContainer from "./TweetActionContainer"
import AccountSetting from "./AccountSetting"
function SideMenuMainMenu() {
	const { data: session } = useSession()
	const Items = [
		{
			title: "home",
			icon: <HomeIcon color={WhiteColor} />,
			href: "/"
		},
		{
			title: "explore",
			icon: <HashIcon color={WhiteColor} />,
			href: "/explore"
		},
		{
			title: "Notifications",
			icon: <NotificationIcon color={WhiteColor} />,
			href: "/notifications"
		},
		{
			title: "Messages",
			icon: <MessagesIcon color={WhiteColor} />,
			href: "/messages"
		},
		{
			title: "Bookmarks",
			icon: <BookmarksIcon color={WhiteColor} />,
			href: "/bookmarks"
		},
		{
			title: "Lists",
			icon: <ListsIcon color={WhiteColor} />,
			href: "/lists"
		},
		{
			title: "Profile",
			icon: <UserIcon color={WhiteColor} />,
			href: `/user/${session?.user?.id}`
		},
		{
			title: "More",
			icon: <MoreIcon color={WhiteColor} />,
			href: ""
		},
	]
	return (
		<React.Fragment>
			<div className="container mx-auto px-6  sm:p-0">
				<div className='md:pl-2 mt-2 sm:flex sm:justify-center md:block'>
					<LogoConatiner />
				</div>
				<div className={`md:pl-2 my-1 grid grid-rows-${Items.length} sm:flex sm:justify-center sm:flex-col`}>
					{Items.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<SideMenuMainMenuItem title={item.title} icon={item.icon} href={item.href} />
							</React.Fragment>
						)
					})}
				</div>
				<div className="md:pl-2">
					<TweetActionContainer />
				</div>
				<AccountSetting />
			</div>
		</React.Fragment>
	)
}
export default SideMenuMainMenu