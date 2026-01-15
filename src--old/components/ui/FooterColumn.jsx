import React from "react";
import { Link } from "react-router-dom";

function FooterColumn({ title, links }) {
     return (
          <div>
               <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
               <ul className="space-y-2">
                    {links.map((link) => (
                         <li key={link}>
                              <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                                   {link}
                              </Link>
                         </li>
                    ))}
               </ul>
          </div>
     );
}

export default FooterColumn;