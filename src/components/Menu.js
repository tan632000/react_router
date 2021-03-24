import React, {Component} from 'react';
import {
    Route,
    Link,
  } from "react-router-dom";

const menus = [
    {
        label : 'Trang chu',
        to : '/',
        exact : true
    },
    {
        label : 'Gioi thieu',
        to : '/about',
        exact : false
    },
    {
        label : 'Lien he',
        to : '/contact',
        exact : false
    },
    {
        label : 'San pham',
        to : '/products',
        exact : false
    },
    {
        label : 'Dang nhap',
        to : '/login',
        exact : false
    },
]
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
      <Route 
        path={to} 
        exact={activeOnlyWhenExact} 
        children={({match}) => {
          var active = match ? 'active' : ''
          return (
            <li className={`my-li ${active}`}>
              <Link to={to}>{label}</Link>
            </li>
          )
        }}/>
    )
  }
class Menu extends Component {
    render() {
        return (
            <ul>
                {this.showMenuList(menus)}
            </ul>
        );
    }
    showMenuList = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index} 
                        label={menu.label} 
                        to={menu.to} 
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }
}

export default Menu