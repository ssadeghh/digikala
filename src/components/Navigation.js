import React, { useEffect, useState } from 'react'
import '../styles/navigation.scss'
import { ReactComponent as Logo } from '../images/logo.svg'
import loginIcon from '../images/loginIcon.png'
import SearchIcon from '../images/search.png'
import menuIcon from '../images/menuIcon.png'
import cartIcon from '../images/cartIcon.png'
import top_header_banner from '../images/top-header-banner.jpg'
import supermarketIcon from '../images/supermarket.png'
import hotSalesIcon from '../images/hot-sales.png'
import discountIcon from '../images/discountIcon.png'
import amazingIcon from '../images/amazingIcon.png'
import locationIcon from '../images/locationIcon.png'

export default function Navigation() {
    const [lastScrollTop, setLastScrollTop] = useState(0)
    const [isHeaderHidden, setIsHeaderHidden] = useState(false)

    useEffect(() => {
        function handleScroll() {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop
            if (scrollTop > lastScrollTop) {
                setIsHeaderHidden(true)
            } else {
                setIsHeaderHidden(false)
            }
            setLastScrollTop(scrollTop)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollTop])

    return (
        <div className="navigation">
            <img
                src={top_header_banner}
                alt=""
                style={{ height: '60px' }}
                className="top-header-banner"
            />
            <div className="inner-navigation">
                <div className="upper-header">
                    <div className="logo-search">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="search">
                            <img
                                src={SearchIcon}
                                alt=""
                                style={{ width: '24px', height: '24px' }}
                                className="searchIcon"
                            />
                            <div className="search-icon-text">
                                <input placeholder="جستوجو" />
                            </div>
                        </div>
                    </div>
                    <div className="left-icons">
                        <div className="signIn">
                            <img
                                src={loginIcon}
                                alt=""
                                style={{
                                    width: '24px',
                                    transform: 'scale(-1,1)',
                                    opacity: '0.8',
                                    marginLeft: '6px',
                                }}
                            />
                            ورود | ثبت نام
                        </div>
                        <span className="divider"></span>
                        <div className="cardIcon">
                            <img
                                src={cartIcon}
                                alt=""
                                style={{
                                    width: '24px',
                                    transform: 'scale(-1,1)',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={`bottom-header ${isHeaderHidden ? 'bottom-header--hidden' : ''}`}>
                    <div className="menu">
                        <div className="category icon">
                            <img
                                src={menuIcon}
                                alt=""
                                style={{ height: '20px', marginLeft: '5px' }}
                            />
                            دسته بندی کالاها
                        </div>
                        <div className="superMarket icon">
                            <img
                                src={supermarketIcon}
                                alt=""
                                style={{
                                    width: '18px',
                                    opacity: '0.7',
                                    marginLeft: '5px',
                                }}
                            />
                            سوپرمارکت
                        </div>
                        <div className="hotsales icon">
                            <img
                                src={hotSalesIcon}
                                alt=""
                                style={{
                                    width: '18px',
                                    opacity: '0.7',
                                    marginLeft: '5px',
                                    transform: 'scale(-1,1)',
                                }}
                            />
                            پرفروش‌ترین‌ها
                        </div>
                        <div className="discount icon">
                            <img
                                src={discountIcon}
                                alt=""
                                style={{
                                    width: '18px',
                                    opacity: '0.7',
                                    marginLeft: '5px',
                                }}
                            />
                            تخفیف‌ها و پرفروش‌ترین‌ها
                        </div>
                        <div className="amazing icon">
                            <img
                                src={amazingIcon}
                                alt=""
                                style={{
                                    width: '18px',
                                    opacity: '0.7',
                                    marginLeft: '5px',
                                }}
                            />
                            شگفت‌انگیزها
                            <div className="amazing-left-border"></div>
                        </div>
                        <div className="anyquestion icon">سوالی دارید؟</div>
                        <div className="anyquestion icon">
                            در دیجی کالا بفروشید!
                        </div>
                    </div>
                    <div className="location">
                        <img
                            src={locationIcon}
                            alt=""
                            style={{
                                width: '18px',
                                opacity: '0.7',
                                marginLeft: '5px',
                            }}
                        />
                        لطفا شهر خود را انتخاب کنید
                    </div>
                </div>
            </div>
        </div>
    )
}
