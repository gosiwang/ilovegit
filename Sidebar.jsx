import React, { useState } from 'react';
import { Home, BookOpen, MessageCircle, Menu } from 'lucide-react';

const styles = {
  menuButton: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    cursor: 'pointer',
    zIndex: 1001,
    color: '#333',
    background: 'white',
    width: 'auto',
    borderRadius: '0 0 8px 0',
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    left: '-240px',
    height: '100vh',
    width: '240px',
    backgroundColor: '#1a1a1a',
    transition: 'left 0.3s ease',
    paddingTop: '80px',
    zIndex: 1000,
  },
  sidebarVisible: {
    left: 0,
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
  },
  menuItemHover: {
    backgroundColor: '#2a2a2a',
  },
  iconContainer: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    marginLeft: '12px',
    whiteSpace: 'nowrap',
  }
};

const menuItems = [
  { icon: Home, text: '홈', path: '/' },
  { icon: BookOpen, text: '학습하기', path: '/learn' },
  { icon: MessageCircle, text: '커뮤니티', path: '/qna' }
  
];

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* 햄버거 메뉴 버튼 */}
      <div
        style={styles.menuButton}
        onMouseEnter={handleMouseEnter}
      >
        <Menu size={24} />
      </div>

      {/* 사이드바 메뉴 */}
      <div
        style={{
          ...styles.sidebar,
          ...(isVisible ? styles.sidebarVisible : {})
        }}
        onMouseLeave={handleMouseLeave}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            style={{
              ...styles.menuItem,
              ...(hoveredItem === index ? styles.menuItemHover : {})
            }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div style={styles.iconContainer}>
              <item.icon size={20} />
            </div>
            <span style={styles.menuText}>
              {item.text}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export { Sidebar };