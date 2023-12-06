import React from "react";
import {Link, useRef } from 'react';

export default function Footer(){
    const ref = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
    return(
        <div className="footer">
            <p>Copyright ©2023 By Hiiipercy || All rights reserved.</p>
                <a onClick={scrollToTop}><i class='bx bx-up-arrow-alt' >
                </i></a>
        </div>
    )
}