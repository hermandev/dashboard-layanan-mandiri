import React from 'react'
import {
    IoGridOutline,
    IoReaderOutline,
    IoMedkitOutline,
    IoCalendarOutline,
    IoSettingsOutline
} from "react-icons/io5";

import {
    SidebarContainer,
    SidebarBrand,
    SidebarNav,
    SideNav,
    SideNavItems,
    NavBadge
} from "./SidebarComponents"


import brand from "../../brand.svg"

function Sidebars() {
    return (
        <SidebarContainer>
            <SidebarBrand>
                <img src={brand} alt="brand layanan mandiri" />
            </SidebarBrand>

            <SidebarNav>
                <SideNav>
                    <SideNavItems>
                        <a href="#"><IoGridOutline /> Dashboard</a>
                    </SideNavItems>
                    <SideNavItems>
                        <a href="#"><IoReaderOutline /> Pendaftaran <NavBadge>1000</NavBadge></a>
                    </SideNavItems>
                    <SideNavItems>
                        <a href="#"><IoMedkitOutline /> Poliklinik</a>
                    </SideNavItems>
                    <SideNavItems>
                        <a href="#"><IoCalendarOutline /> Jadwal</a>
                    </SideNavItems>
                    <SideNavItems>
                        <a href="#"><IoSettingsOutline /> Settings</a>
                    </SideNavItems>
                </SideNav>
            </SidebarNav>
        </SidebarContainer>
    )
}

export default Sidebars
