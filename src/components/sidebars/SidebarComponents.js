import styled from "styled-components"

export const SidebarContainer = styled.div`
    grid-area: sidebars;
    /* padding: 10px; */
    border-right:2px solid #e6e9f4;
`

export const SidebarBrand = styled.div`
    display: flex;
    justify-content:center;
    margin-bottom:50px;
    margin-top:30px;

    img {
        width:150px;
    }
`

export const SidebarNav = styled.div`

`

export const SideNav = styled.ul`
    list-style:none;
`

export const SideNavItems = styled.li`
    
    

    a {
        display:flex;
        align-items:center;
        padding-left:20px;
        padding-top:5px;
        padding-bottom:5px;
        margin-bottom:15px;
        /* display:inline-block; */
        color:#34495E;
        width:100%;
        border-right:2px solid #FFF;
        transition:.3s ease-in-out;
        font-size:.9rem;

        svg {
            width:23px;
            height:23px;
            margin-right:20px;
        }
    }

    a:hover {
        border-right:2px solid #ef84a9;
        color:#ef84a9;
    }

   
`


export const NavBadge = styled.span`
    margin-left:20px;
    padding-left:10px;
    padding-right:10px;
    border-radius:20px;
    text-align:center;
    background-color:#e2e4e9;
    color:#c0c5cf
`