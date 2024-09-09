import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa"; // Font Awesomeからアイコンをインポート

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex justify-center space-x-4">
        {/* Twitter */}
        <a
          href="https://twitter.com/egooo_zeroplus"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
          aria-label="Twitter"
        >
          <FaTwitter size={24} />
        </a>

        {/* Instagram
        <a
          href="https://www.instagram.com/kai_k.l.voll/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a> */}
      </div>

      <div className="text-center mt-3 text-xs">
        <p>&copy; 2024 秒速計算ノック. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
